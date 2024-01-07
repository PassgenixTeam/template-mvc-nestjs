const path = require("path");

module.exports = function (options) {
	// Overwrite the default webpack config
	return {
		...options,
		resolve: {
			...options.resolve,

			// Configure path aliases
			alias: {
				...options.resolve.alias,
				"@views": path.resolve(__dirname, "./views"),
				"@public": path.resolve(__dirname, "./public"),

				"@modules": path.resolve(__dirname, "./src/modules"),
				"@controllers": path.resolve(__dirname, "./src/controllers"),
				"@gateways": path.resolve(__dirname, "./src/gateways"),
			},
		},

		module: {
			// Configure rules
			rules: [
				...options.module.rules,
				// Override rules here
			],
		},
	};
};
