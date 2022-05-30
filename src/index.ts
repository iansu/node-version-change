import fs from 'fs';
import { parseArgs } from '@pkgjs/parseargs';
import SimpleGit from 'simple-git';
import { diff } from 'semver';

import { isMonorepo } from './lib/monorepo';

const main = async (): Promise<void> => {
  const args = process.argv.slice(2);
  const options = {
    silent: {
      type: 'boolean',
      short: 's',
    },
  };
  const defaults = {
    since: 'origin/main'
  };

  try {
    const { values } = parseArgs({ args, options });
    const settings = { ...defaults, ...values };

    console.log(values);
    // const git = SimpleGit();

    // if (isMonorepo()) {
    //   console.log(`Comparing versions against ${settings.since}`);
    // } else {
    //   console.log(`Comparing version against ${settings.since}`);
    //   const pkgJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    //   const oldPkgJson = JSON.parse(await git.show(`${settings.since}:package.json`));

    //   console.log(diff(oldPkgJson.version, pkgJson.version));
    // }
  } catch (error: any) {
    console.log('USAGE: node-version-change [options]');
    console.log();
    console.error(error.message);
  }
}

export { main };