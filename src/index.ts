export default function index() {
	return 42
}

// @ts-ignore
module.exports = Object.assign(exports.default, exports)
