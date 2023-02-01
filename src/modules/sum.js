export function sum(...args) {
	if (args.length === 0) {
		throw Error('sum required at least 1 argument')
	}

	return args.reduce((sum, item) => sum + item, 0);
}
