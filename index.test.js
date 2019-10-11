/* eslint-disable no-undef */
const sshfs = require('./index');

test('mount fails with no arguments', () => {
  expect(sshfs.mount).toThrow(Error);
});

test('unmount fails with no arguments', () => {
  expect(sshfs.unmount).toThrow(Error);
});

test('umount fails with no arguments', () => {
  expect(sshfs.unmount).toThrow(Error);
});

test('validate input returns true', () => {
  expect(sshfs.validateInput('allen', 'host', '/d')).toBe(true);
});
