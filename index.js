/* eslint-disable no-multi-assign */
/* eslint-disable no-console   */

// SSHFS-Mount
const { exec } = require('child_process');
const fs = require('fs');

exports = module.exports = {};

function mkdir(mountpoint) {
  // if mountpoint dir doesn't exist make it
  if (!fs.existsSync(mountpoint)) {
    console.log(`Creating mountpoint directory at ${mountpoint}`);
    fs.mkdirSync(mountpoint);
  }
}

function validateInput(user, host, mountpoint) {
  if (!user) {
    throw new Error('USER was not provided');
  }
  if (!host) {
    throw new Error('HOST was not provided');
  }
  if (!mountpoint) {
    throw new Error('MOUNTPOINT was not provided');
  }
  return true;
}

// mount the drive
exports.mount = (user, host, mountpoint) => {
  validateInput(user, host, mountpoint);
  mkdir(mountpoint);

  exec(`sshfs ${user}@${host}:/ ${mountpoint}`, (error, stdout, stderr) => {
    if (error) {
      throw new Error(`exec ${error}`);
    }

    console.log(`${stdout}`);
    console.log(`${stderr}`);
  });
};

// unmount the drive
exports.umount = (mountpoint) => {
  if (!mountpoint) {
    throw new Error('MOUNTPOINT was not provided');
  }

  exec(`umount ${mountpoint}`, (error, stdout, stderr) => {
    if (error) {
      throw new Error(`exec ${error}`);
    }

    console.log(`${stdout}`);
    console.log(`${stderr}`);
  });
};
