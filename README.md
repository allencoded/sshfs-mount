# sshfs-mount
[![npm version](https://badge.fury.io/js/sshfs-mount.svg)](https://badge.fury.io/js/sshfs-mount)
[![GitHub issues](https://img.shields.io/github/issues/allencoded/sshfs-mount.svg)](https://github.com/allencoded/sshfs-mount/issues)

Use SSHFS to mount your remote file system over SSH. Only supports public and private keys. Does not support passwords.

## Requirement

### macOS
```
brew cask install osxfuse
brew install sshfs
```

### Debian/Ubuntu
```apt-get install sshfs```

### RHEL/CentOS
```yum install sshfs```

## Installation
```npm install sshfs-mount```

## Usage
```
var sshfs = require('sshfs-mount');

// Mount Drive
sshfs.mount('root', '192.168.0.1', '/Volumes/Allencoded');

// Unmount(umount) Drive
sshfs.umount('/Volumes/Allencoded');

// Mount Drive with somes SSHFS options
sshfs.mount('user', 'server', '-p 2222');
```

## Author Notes
Please let me know if you find any problems. Also feel free to open any Pull Requests for improvements and I will review them and get them in.

## License
Copyright (c) 2016, Allen Hendricks

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
