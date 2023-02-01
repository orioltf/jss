import { expect } from 'chai';
import nock from 'nock';
import { GraphQLSiteInfoService } from './graphql-siteinfo-service';

describe('GraphQLSiteInfoService', () => {
  const endpoint = 'http://site';
  const apiKey = 'some-api-key';
  const nonEmptyResponse = {
    data: {
      search: {
        results: [
          {
            name: {
              value: 'site 51',
            },
            hostName: {
              value: 'restricted.gov',
            },
            language: {
              value: 'en',
            },
          },
          {
            name: {
              value: 'public',
            },
            hostName: {
              value: 'pr.showercurtains.org',
            },
            language: {
              value: '',
            },
          },
        ],
      },
    },
  };
  const emptyResponse = {
    data: {
      search: {
        results: [],
      },
    },
  };

  afterEach(() => {
    nock.cleanAll();
  });

  const mockSiteInfoRequest = () => {
    nock(endpoint)
      .post('/')
      .reply(200, nonEmptyResponse);
  };

  it('should return correct result', async () => {
    mockSiteInfoRequest();
    const service = new GraphQLSiteInfoService({ apiKey: apiKey, endpoint: endpoint });
    const result = await service.fetchSiteInfo();
    expect(result).to.be.deep.equal([
      {
        name: 'site 51',
        hostName: 'restricted.gov',
        language: 'en',
      },
      {
        name: 'public',
        hostName: 'pr.showercurtains.org',
        language: '',
      },
    ]);
  });

  it('should return empty array when empty result received', async () => {
    nock(endpoint)
      .post('/')
      .reply(200, emptyResponse);
    const service = new GraphQLSiteInfoService({ apiKey: apiKey, endpoint: endpoint });
    const result = await service.fetchSiteInfo();
    expect(result).to.deep.equal([]);
  });

  it('should use caching by default', async () => {
    mockSiteInfoRequest();
    const service = new GraphQLSiteInfoService({ apiKey: apiKey, endpoint: endpoint });
    const result = await service.fetchSiteInfo();
    nock.cleanAll();
    nock(endpoint)
      .post('/')
      .reply(200, emptyResponse);
    const resultCached = await service.fetchSiteInfo();
    expect(resultCached).to.deep.equal(result);
  });

  it('should be possible to disable cache', async () => {
    mockSiteInfoRequest();
    const service = new GraphQLSiteInfoService({
      apiKey: apiKey,
      endpoint: endpoint,
      cacheEnabled: false,
    });
    const result = await service.fetchSiteInfo();
    expect(result).to.be.deep.equal([
      {
        name: 'site 51',
        hostName: 'restricted.gov',
        language: 'en',
      },
      {
        name: 'public',
        hostName: 'pr.showercurtains.org',
        language: '',
      },
    ]);
    nock.cleanAll();
    nock(endpoint)
      .post('/')
      .reply(200, emptyResponse);
    const resultCached = await service.fetchSiteInfo();
    expect(resultCached).to.deep.equal([]);
  });
});