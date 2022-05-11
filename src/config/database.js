module.exports = {
    connection: process.env.DB_CONNECTION || 'mongo',
    connections: {
        mongo: {
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 27017,
            user: process.env.DB_USERNAME || null,
            pass: process.env.DB_PASSWORD || null,
            database: process.env.DB_DATABASE
        }
    }
}