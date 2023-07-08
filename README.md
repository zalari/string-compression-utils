# String Compression

Compress or decompress a string with [**native** browser APIs](https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API)
with [`gzip`, `deflate`, or `deflate-raw`](https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream/CompressionStream#format).\
Compatible to use with [`atob`](https://developer.mozilla.org/en-US/docs/Web/API/atob) and
[`btoa`](https://developer.mozilla.org/en-US/docs/Web/API/btoa).

## Example Usage

```js
import { compress, decompress } from '@zalari/string-compression-utils';

const input = '{"id":1,"todo":"Do something nice for someone you care about","completed":true,"userId":26}';

const compressedString = await compress(input, 'gzip');
const urlFriendly = encodeURIComponent(compressedString);

const decodedString = decodeURIComponent(urlFriendly);
const output = await decompress(decodedString, 'gzip');

console.assert(input === output);
```
