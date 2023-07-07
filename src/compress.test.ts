import { expect } from '@esm-bundle/chai';
import { compress } from './compress.js';

it('delivers a promise', async () => {
  expect(compress('Hello World!', 'deflate-raw')).to.be.a('Promise');
});

it.each`
  encoding         | input             | output
  ${'gzip'}        | ${'Hello World!'} | ${'H4sIAAAAAAAAE/NIzcnJVwjPL8pJUQQAoxwpHAwAAAA='}
  ${'deflate'}     | ${'Hello World!'} | ${'eJzzSM3JyVcIzy/KSVEEABxJBD4='}
  ${'deflate-raw'} | ${'Hello World!'} | ${'80jNyclXCM8vyklRBAA='}
`('should compress a regular string with $encoding', async ({ encoding, input, output }) => {
  expect(await compress(input, encoding)).to.be.equal(output);
});
