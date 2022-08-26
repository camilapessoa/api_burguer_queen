const database = require('../models/index');

class UsersController{
    static async getAllUsers(rea, res){
        try{
            const allUsers = await database.Users.findAll()
            return res.status(200).json(allUsers)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsersController

