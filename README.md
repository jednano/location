# @jedmao/location

<!-- markdownlint-disable -->
[![GitHub Actions](https://github.com/jedmao/location/workflows/master/badge.svg)](https://github.com/jedmao/location/actions)
[![NPM version](http://img.shields.io/npm/v/@jedmao/location.svg)](https://www.npmjs.org/package/@jedmao/location)
[![npm license](http://img.shields.io/npm/l/@jedmao/location.svg)](https://www.npmjs.org/package/@jedmao/location)
[![codecov](https://codecov.io/gh/jedmao/location/branch/master/graph/badge.svg)](https://codecov.io/gh/jedmao/location)
[![BundlePhobia Minified](https://badgen.net/bundlephobia/min/@jedmao/location?label=min)](https://bundlephobia.com/result?p=@jedmao/location)
[![BundlePhobia Minified + gzip](https://badgen.net/bundlephobia/minzip/@jedmao/location?label=min%2Bgzip&)](https://bundlephobia.com/result?p=@jedmao/location)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Unicorn Approved](https://img.shields.io/badge/unicorn-approved-ff69b4.svg)](https://twitter.com/sindresorhus/status/457989012528316416?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fwww.quora.com%2FWhat-does-the-unicorn-approved-shield-mean-in-GitHub)
<!-- markdownlint-restore -->

<!-- markdownlint-disable commands-show-output -->

A `Location` class that extends [`URL`][] and implements the [`Location interface of the Web API`](https://developer.mozilla.org/en-US/docs/Web/API/Location). As always, with first-class TypeScript support!

## Installation

```bash
npm i @jedmao/location
```

## Usage

```ts
import Location = require('@jedmao/location')

const loc = new Location('http://foo.com/')
loc.assign('http://bar.com/')
loc.replace('http://baz.com/')
loc.reload()
```

Because this package extends [`URL`][], many features are provided for free. This means you can do this:

```ts
new Location('http://jed:secret@test:42/foo?bar=baz#qux')
```

Which returns the following object:

```ts
Location {
  href: 'http://jed:secret@test:42/foo?bar=baz#qux',
  origin: 'http://test:42',
  protocol: 'http:',
  username: 'jed',
  password: 'secret',
  host: 'test:42',
  hostname: 'test',
  port: '42',
  pathname: '/foo',
  search: '?bar=baz',
  searchParams: URLSearchParams { 'bar' => 'baz' },
  hash: '#qux' }
```

### Mocking

A common use for this package is to mock the `window.location`, which you can do in [Jest](https://jestjs.io/) like so:

```ts
const { location: savedLocation } = window

beforeAll(() => {
  delete window.location
})

beforeEach(() => {
  window.location = new Location('http://test/')
})

afterAll(() => {
  window.location = savedLocation
})

it('assigns /login', () => {
  const assign = jest
    .spyOn(window.location, 'assign')
    .mockImplementationOnce(() => {})

  window.location.assign('/login')

  expect(assign).toHaveBeenCalledWith('/login')
})
```

[`url`]: https://developer.mozilla.org/en-US/docs/Web/API/URL
