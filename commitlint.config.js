module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"fix",
				"docs",
				"style",
				"refactor",
				"pref",
				"test",
				"build",
				"ci",
				"chore",
				"revert",
			],
		],
	},
};
