const path = require('path');
const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const { getDownloadURL } = require('./lib/utils');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const downloadURL = getDownloadURL(version);
  const pathToTarball = await tc.downloadTool(downloadURL.url);

  // Extract the tarball onto host runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(path.join(pathToCLI, downloadURL.filename, 'bin'));
}

module.exports = setup

if (require.main === module) {
  try {
    setup();
  } catch (e) {
    core.error(e);
  }
}
