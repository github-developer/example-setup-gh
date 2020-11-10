const os = require('os');

const core = require('@actions/core');

function getDownloadURL(version) {
  core.debug(`platform: ${ os.platform() }`);
  core.debug(`arch: ${ os.arch() }`);
  core.debug(version);

  // https://github.com/cli/cli/releases/download/v1.1.0/gh_1.1.0_linux_amd64.tar.gz
  // https://github.com/cli/cli/releases/download/v1.1.0/gh_1.1.0_macOS_amd64.tar.gz
  // https://github.com/cli/cli/releases/download/v1.1.0/gh_1.1.0_windows_amd64.zip
  return `https://github.com/cli/cli/releases/download/v${ version }/gh_${ version }_linux_amd64.tar.gz`
}

module.exports = { getDownloadURL }
