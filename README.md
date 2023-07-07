# String Compression

Compress or decompress a string with **native** browser APIs with `gzip`, `deflate`, or `deflate-raw`.\
Compatible to use with atob and btoa.

## Example Usage

```js
import { compress, decompress } from '@zalari/string-compression-utils';

const input = '{"id":1,"todo":"Do something nice for someone you care about","completed":true,"userId":26}';

const compressedString = await compress(input, 'gzip');
const urlFriendly = encodeURIComponent(btoa(compressedString));

const binaryString = atob(decodeURIComponent(urlFriendly));
const output = await decompress(binaryString, 'gzip');

console.assert(input === output);
```
