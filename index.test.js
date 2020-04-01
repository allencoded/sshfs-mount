/* eslint-disable no-undef */
const sshfs = require('./index');

describe('Exceptions test', () => {
  it('mount fails with no arguments', async () => {
    await expect(sshfs.mount()).rejects.toThrow();
  });

  it('umount fails with no arguments', async () => {
    await expect(sshfs.umount()).rejects.toThrow();
  });
});
