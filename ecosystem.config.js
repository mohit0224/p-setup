module.exports = {
    apps: [
        {
            name: "production-server",
            script: "dist/index.js",
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};

