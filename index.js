'use strict';

// SSHFS-Mount
const exec = require('child_process').exec;
const fs = require('fs');
exports = module.exports = {};

// mount the drive
exports.mount = (user, host, mountpoint, options) => {
  validate(user, host, mountpoint);
  mkdir(mountpoint);

  exec(`sshfs ${user}@${host}:/ ${mountpoint} ${options}`, (error, stdout, stderr) => {
      console.log(`${stdout}`);
      console.log(`${stderr}`);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    }
  );
};

// unmount the drive
exports.umount = (mountpoint) => {
  if (mountpoint === null) {
    console.error('mountpoint not provided');
  }

  exec(`umount ${mountpoint}`, (error, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

let mkdir = (mountpoint) => {
  // if mountpoint dir doesn't exist make it
  if (!fs.existsSync(mountpoint)) {
    fs.mkdirSync(mountpoint);
  }
};

let validate = (user, host, mountpoint, options) => {
  if (user === null) {
    console.error('user not provided');
  }
  if (host === null) {
    console.error('host not provided');
  }
  if (mountpoint === null) {
    console.error('mountpoint not provided');
  }
  //@TODO: mega job, validate options one by one ?
};
