#octo #examples

# A Quick Guide to the Web Crypto API

The documentation on [MDN](https://developer.mozilla.org/en-US/) is robust, but it requires a lot of jumping around to individual method APIs. I hope this article is helpful for anyone out there looking for guidance.

### Generating a Key

To start things off, we need to generate a symmetric key.

```js
// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey
const generateKey = async () => {
  return window.crypto.subtle.generateKey({
    name: 'AES-GCM',
    length: 256,
  }, true, ['encrypt', 'decrypt'])
}
```

### Encoding Data

Before we can encrypt data, we first have to encode it into a byte stream. We can achieve this pretty simply with the `TextEncoder` class. This little utility will be used by our `encrypt` function later.

```js
// https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
const encode = (data) => {
  const encoder = new TextEncoder()

  return encoder.encode(data)
}
```
