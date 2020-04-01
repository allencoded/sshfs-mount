/* eslint-disable no-console */
const path = require('path');

const sshfs = require('./index');

const mountpoint = path.join('/Volumes/Allencoded');

function exitHandler(code) {
  if (code !== 0) {
    // eslint-disable-next-line no-console
    sshfs.umount(mountpoint);
    console.log('Volume unmounted');
  }

  process.exit();
}

async function connect() {
  try {
    // Mount Drive
    await sshfs.mount('root', '192.168.0.1', mountpoint, { dir: '/home/user', options: '-p 2222' });
    console.log('Volume mounted');

    process.stdin.resume();

    process.on('exit', exitHandler);
    process.on('SIGINT', exitHandler);
    process.on('SIGUSR1', exitHandler);
    process.on('SIGUSR2', exitHandler);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

connect().then();
