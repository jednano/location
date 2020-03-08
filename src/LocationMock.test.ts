import { LocationMock } from './LocationMock'

describe(`${LocationMock.name} class`, () => {
	it('assigns', () => {
		const loc = new LocationMock('http://foo.bar/')
		const newUrl = 'http://baz.qux/'

		loc.assign(newUrl)

		expect(loc.toString()).toBe(newUrl)
	})

	it('reloads', () => {
		const loc = new LocationMock('http://foo.bar/')
		expect(loc.reload()).toBeUndefined()
	})

	it('replaces', () => {
		const loc = new LocationMock('http://foo.bar/')
		const newUrl = 'http://baz.qux/'

		loc.replace(newUrl)

		expect(loc.toString()).toBe(newUrl)
	})

	describe('README examples', () => {
		const { location: savedLocationMock } = window

		beforeAll(() => {
			delete window.location
		})

		beforeEach(() => {
			window.location = new LocationMock('http://test/')
		})

		afterAll(() => {
			window.location = savedLocationMock
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
