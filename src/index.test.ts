/* eslint-env node, jest */
import index from '.'
import commonJSModule = require('.')

describe('index', () => {
	it('exports a CommonJS module for npm compatibility', () => {
		expect(commonJSModule).toBe(index)
	})

	it('has a circular default prop', () => {
		// @ts-ignore
		expect(index.default.default).toBe(index)
	})

	it('returns 42', () => {
		expect(index()).toEqual(42)
	})
})
