import * as database from '../db/models/index.js';

class UsersController {
  static async getAllUsers(req, res) {
    try {
      
      const allUsers = await database.Users.findAll();
      console.log(allUsers)
      return res.status(200).json(allUsers);
    } catch (error) {
      console.log('users', Users)
      return res.status(500).json(error.message);
    }
  }

  static async getOneUser(req, res) {
    const { id } = req.params; // recebe um parâmetro na requisição que é o id
    try {
      const oneUser = await database.Users.findOne({
        where: {
          id: Number(id), // id na coluna do db
        },
      });
      return res.status(200).json(oneUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
    try {
      const createdUser = await database.Users.create(newUser);
      return res.status(200).json(createdUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

 /*  static async updateUser(req, res) {
    const updatedInfo = req.body;
    try {

    } catch (error) {

    }
  } */
}

export default UsersController;
