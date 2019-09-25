/* eslint-env browser, node, jest */
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

	describe('README examples', () => {
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
	})
})
