[@sitecore-jss/sitecore-jss-react](../README.md) / GraphQLDictionaryService

# Class: GraphQLDictionaryService

Service that fetch dictionary data using Sitecore's GraphQL API.

**`Mixes`**

SearchQueryService<DictionaryQueryResult>

## Hierarchy

- `DictionaryServiceBase`

  ↳ **`GraphQLDictionaryService`**

## Table of contents

### Constructors

- [constructor](GraphQLDictionaryService.md#constructor)

### Properties

- [graphQLClient](GraphQLDictionaryService.md#graphqlclient)
- [options](GraphQLDictionaryService.md#options)
- [searchService](GraphQLDictionaryService.md#searchservice)

### Methods

- [fetchDictionaryData](GraphQLDictionaryService.md#fetchdictionarydata)
- [getCacheClient](GraphQLDictionaryService.md#getcacheclient)
- [getCacheValue](GraphQLDictionaryService.md#getcachevalue)
- [getGraphQLClient](GraphQLDictionaryService.md#getgraphqlclient)
- [setCacheValue](GraphQLDictionaryService.md#setcachevalue)

## Constructors

### constructor

• **new GraphQLDictionaryService**(`options`)

Creates an instance of graphQL dictionary service with the provided options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `GraphQLDictionaryServiceConfig` | instance |

#### Overrides

DictionaryServiceBase.constructor

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:54

## Properties

### graphQLClient

• `Private` **graphQLClient**: `any`

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:48

___

### options

• **options**: `GraphQLDictionaryServiceConfig`

#### Overrides

DictionaryServiceBase.options

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:47

___

### searchService

• `Private` **searchService**: `any`

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:49

## Methods

### fetchDictionaryData

▸ **fetchDictionaryData**(`language`): `Promise`<[`DictionaryPhrases`](../interfaces/DictionaryPhrases.md)\>

Fetches dictionary data for internalization.

**`Default`**

query (@see query)

**`Throws`**

if the app root was not found for the specified site and language.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | `string` | the language to fetch |

#### Returns

`Promise`<[`DictionaryPhrases`](../interfaces/DictionaryPhrases.md)\>

dictionary phrases

#### Overrides

DictionaryServiceBase.fetchDictionaryData

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:62

___

### getCacheClient

▸ `Protected` **getCacheClient**(): `CacheClient`<[`DictionaryPhrases`](../interfaces/DictionaryPhrases.md)\>

Gets a cache client that can cache data. Uses memory-cache as the default
library for caching (@see MemoryCacheClient). Override this method if you
want to use something else.

#### Returns

`CacheClient`<[`DictionaryPhrases`](../interfaces/DictionaryPhrases.md)\>

implementation

#### Inherited from

DictionaryServiceBase.getCacheClient

#### Defined in

sitecore-jss/types/i18n/dictionary-service.d.ts:49

___

### getCacheValue

▸ **getCacheValue**(`key`): [`DictionaryPhrases`](../interfaces/DictionaryPhrases.md)

Retrieves a

**`See`**

 - DictionaryPhrases value from the cache.
 - DictionaryPhrases value, or null if the specified key is not found in the cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The cache key. |

#### Returns

[`DictionaryPhrases`](../interfaces/DictionaryPhrases.md)

The

#### Inherited from

DictionaryServiceBase.getCacheValue

#### Defined in

sitecore-jss/types/i18n/dictionary-service.d.ts:42

___

### getGraphQLClient

▸ `Protected` **getGraphQLClient**(): `GraphQLClient`

Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
want to use something else.

#### Returns

`GraphQLClient`

implementation

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:69

___

### setCacheValue

▸ **setCacheValue**(`key`, `value`): [`DictionaryPhrases`](../interfaces/DictionaryPhrases.md)

Caches a

**`See`**

DictionaryPhrases value for the specified cache key.

**`Mixes`**

CacheClient<DictionaryPhrases>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The cache key. |
| `value` | [`DictionaryPhrases`](../interfaces/DictionaryPhrases.md) | The value to cache. |

#### Returns

[`DictionaryPhrases`](../interfaces/DictionaryPhrases.md)

The value added to the cache.

#### Inherited from

DictionaryServiceBase.setCacheValue

#### Defined in

sitecore-jss/types/i18n/dictionary-service.d.ts:36
