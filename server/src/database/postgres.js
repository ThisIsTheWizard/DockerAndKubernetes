const {Sequelize} = require('sequelize')

const POSTGRES_URL = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DB}`
console.log({POSTGRES_URL})
const sequelize = new Sequelize(POSTGRES_URL)

const connectDB = async () => {
    try {
        await sequelize.authenticate()

        await sequelize.sync({alter: true})
    } catch (err) {
        console.log('+++ Error happened when connecting database, error:', err, '+++')
    }
}

module.exports = {connectDB, sequelize}
