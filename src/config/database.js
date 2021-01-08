const base = 'mongodb://'
const dbHost = process.env.DB_HOST || 'localhost'
const dbPort = process.env.DB_PORT || 27017
const dbName = process.env.DB_DATABASE || 'test'
const dbUser = process.env.DB_USERNAME || ''
const dbPassword = process.env.DB_PASSWORD || ''

module.exports = {
    getConnection: function () {
        let auth = ''

        if (dbUser != '' && dbPassword != '') {
            auth = `${$dbUser}:${dbPassword}@`
        }

        let dbUrl = `${dbHost}:${dbPort}/${dbName}`

        return base + auth + dbUrl
    }
}