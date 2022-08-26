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

    static async getOneUser(req,res){
        const { id } = req.params // recebe um parâmetro na requisição que é o id
        try {
            const oneUser = await database.Users.findOne({
                where:{
                    id: Number(id) //id na coluna do db
                }
            }) 
            return res.status(200).json(oneUser)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsersController

