import { expect } from '@esm-bundle/chai';
import { decompress } from './decompress.js';

it('delivers a promise', async () => {
  expect(decompress('80jNyclXCM8vyklRBAA=', 'deflate-raw')).to.be.a('Promise');
});

it.each`
  encoding         | input                                             | output
  ${'gzip'}        | ${'H4sIAAAAAAAAE/NIzcnJVwjPL8pJUQQAoxwpHAwAAAA='} | ${'Hello World!'}
  ${'deflate'}     | ${'eJzzSM3JyVcIzy/KSVEEABxJBD4='}                 | ${'Hello World!'}
  ${'deflate-raw'} | ${'80jNyclXCM8vyklRBAA='}                         | ${'Hello World!'}
`('should decompress a regular string with $encoding', async ({ encoding, input, output }) => {
  expect(await decompress(input, encoding)).to.be.equal(output);
});
