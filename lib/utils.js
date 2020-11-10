const os = require('os');

// arch in [arm, x32, x64...] (https://nodejs.org/api/os.html#os_os_arch)
// return value in [amd64, 386, arm]
function mapArch(arch) {
  const mappings = {
    x32: '386',
    x64: 'amd64'
  };
  return mappings[arch] || arch;
}

// os in [darwin, linux, win32...] (https://nodejs.org/api/os.html#os_os_platform)
// return value in [darwin, linux, windows]
function mapOS(os) {
  const mappings = {
    darwin: 'macOS',
    win32: 'windows'
  };
  return mappings[os] || os;
}

function getDownloadURL(version) {
  return `https://github.com/cli/cli/releases/download/v${ version }/gh_${ version }_${ mapOS(os.platform()) }_${ mapArch(os.arch()) }.tar.gz`
}

module.exports = { getDownloadURL }
