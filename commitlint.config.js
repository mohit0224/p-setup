module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        // "subject-case": [2, "always", "sentence-case"],
        "type-enum": [
            2,
            "always",
            [
                "feat", // A new feature for the user.
                "fix", // A bug fix.
                "docs", // Documentation only changes.
                "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
                "refactor", // A code change that neither fixes a bug nor adds a feature.
                "pref", // Performance improvements.
                "test", // Adding missing tests or correcting existing tests.
                "build", // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
                "ci", // Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
                "chore", // Other changes that don't modify src or test files.
                "revert", // Reverts a previous commit.
            ],
        ],
    },
};
