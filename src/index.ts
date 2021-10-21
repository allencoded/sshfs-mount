import { exec } from "child_process";
import { mkdir } from "fs/promises";

/**
 * Mounts SSH drive to the specified mountpoint.
 *
 * ```javascript
 * mount('root', '192.168.0.1', '/Volumes/Local');
 * ```
 * @param user {string} username
 * @param host {string} host address
 * @param mountpoint {string} desired drive mount location
 */
async function mount(user: string, host: string, mountpoint: string) {
  try {
    validateMountInputs(user, host, mountpoint);

    await mkdir(mountpoint);
    const { stdout, stderr } = exec(`sshfs ${user}@${host}:/ ${mountpoint}`);

    if (stderr) {
      console.error(`error: ${stderr}`);
    }

    console.log(`${stdout}`);
  } catch (e) {
    console.error(`error: ${e}`);
  }
}

/**
 * Unmounts the SSH drive at the specified local mount location.
 *
 * ```javascript
 * unmount('/Volumes/Local');
 * ```
 *
 * @param mountpoint {string} mounted drive location
 */
function unmount(mountpoint: string) {
  const { stdout, stderr } = exec(`unmount ${mountpoint}`);

  if (stderr) {
    console.error(`error: ${stderr}`);
  }

  console.log(`${stdout}`);
}

/**
 * Validates the users input
 */
function validateMountInputs(user: string, host: string, mountpoint: string) {
  if (!user) {
    throw new Error("No USER string provided");
  }

  if (!host) {
    throw new Error("No HOST string provided");
  }

  if (!mountpoint) {
    throw new Error("No MOUNTPOINT string provided");
  }
}

export { mount, unmount };
