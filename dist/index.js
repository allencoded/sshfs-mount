"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unmount = exports.mount = void 0;
const child_process_1 = require("child_process");
const promises_1 = require("fs/promises");
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
function mount(user, host, mountpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            validateMountInputs(user, host, mountpoint);
            yield (0, promises_1.mkdir)(mountpoint);
            const { stdout, stderr } = (0, child_process_1.exec)(`sshfs ${user}@${host}:/ ${mountpoint}`);
            if (stderr) {
                console.error(`error: ${stderr}`);
            }
            console.log(`${stdout}`);
        }
        catch (e) {
            console.error(`error: ${e}`);
        }
    });
}
exports.mount = mount;
/**
 * Unmounts the SSH drive at the specified local mount location.
 *
 * ```javascript
 * unmount('/Volumes/Local');
 * ```
 *
 * @param mountpoint {string} mounted drive location
 */
function unmount(mountpoint) {
    const { stdout, stderr } = (0, child_process_1.exec)(`unmount ${mountpoint}`);
    if (stderr) {
        console.error(`error: ${stderr}`);
    }
    console.log(`${stdout}`);
}
exports.unmount = unmount;
/**
 * Validates the users input
 */
function validateMountInputs(user, host, mountpoint) {
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
//# sourceMappingURL=index.js.map