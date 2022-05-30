import fs from 'fs';
import path from 'path';

const isMonorepo = () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));

  return pkg.workspaces;
};

export { isMonorepo };
