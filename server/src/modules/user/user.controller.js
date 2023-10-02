const UserEntity = require("./user.entity")

const userController = {}

userController.list = async (req, res) => {
    try {
        const users = await UserEntity.findAll({})

        return res.status(200).json({data: users, message: 'Fetched'})
    } catch (err) {
        return res.status(500).json({message: `Error happened when fetching users, error: ${err?.message}`})
    }
}

userController.register = async (req, res) => {
    try {
        const user = await UserEntity.create({email: 'email@email.com', name: 'Name', password: '12345678'})

        return res.status(201).json({data: user, message: 'Registered'})
    } catch (err) {
        return res.status(500).json({message: `Error happened when registering, error: ${err?.message}`})
    }
}

module.exports = userController
