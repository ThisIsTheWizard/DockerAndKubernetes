const {DataTypes} = require('sequelize')

const {sequelize} = require('../../database/postgres')

const UserEntity = sequelize.define(
    'user',
    {
        id: {
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID,
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        }
    },
    {timestamps: true}
)

module.exports = UserEntity
