/* eslint-env node, jest */
import Location = require('./Location')

describe('Location class', () => {
	it('exports a CommonJS module', () => {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		expect(require('./Location')).toBe(Location)
	})

	it('assigns', () => {
		const loc = new Location('http://foo.bar/')
		const newUrl = 'http://baz.qux/'

		loc.assign(newUrl)

		expect(loc.toString()).toBe(newUrl)
	})

	it('reloads', () => {
		const loc = new Location('http://foo.bar/')
		expect(loc.reload()).toBeUndefined()
	})

	it('replaces', () => {
		const loc = new Location('http://foo.bar/')
		const newUrl = 'http://baz.qux/'

		loc.replace(newUrl)

		expect(loc.toString()).toBe(newUrl)
	})
})
