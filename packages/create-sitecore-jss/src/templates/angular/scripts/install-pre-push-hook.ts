﻿import * as fs from 'fs';

const installHooks = () => {
  // data to be written to the file
  const data = `#!/bin/sh
#
# pre-push hook runs our linter before we push our changes
#
# To skip this hook, use the --no-verify flag
# when pushing.
#

echo "Running lint check..."
npm run lint`;

  // \x1b[32m%s\x1b[0m - set color to green, insert the string, reset color after string is logged to console
  console.log('\x1b[32m%s\x1b[0m', 'Writing to local .git folder...');

  // Write the hook to the local .git folder. Using writeFile in order to catch any errors
  fs.writeFile('./.git/hooks/pre-push', data, 'utf8', (err: Error) => {
    if (err) {
      console.log('\x1b[31m%o\x1b[0m', err);
    } else {
      console.log('\x1b[32m%s\x1b[0m', 'Success!');
    }
  });
};

installHooks();