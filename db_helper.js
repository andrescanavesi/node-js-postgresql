const parseDbUrl = require("parse-database-url");

//we have our connection url in an environment config variable. Each developer will have his own
//a connectino url will look like this:
//postgres://hfbwxykfdgkurg:a75568307daad4b1432b5d173719ba7ba908ea06e7d0ebe8bf7bd434eb655547@ec2-108-21-167-137.compute-1.amazonaws.com:5432/w5tftigeor6odh
const dbConfig = parseDbUrl(process.env.DATABASE_URL);
const Pool = require("pg").Pool;
const pool = new Pool({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.database,
    password: dbConfig.password,
    port: dbConfig.port,
    ssl: true,
});

module.exports.execute = pool;
