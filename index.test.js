/* eslint-disable no-undef */
const sshfs = require('./index');

test('mount fails with no arguments', () => {
  expect(sshfs.mount).toThrow(Error);
});

test('umount fails with no arguments', () => {
  expect(sshfs.umount).toThrow(Error);
});
