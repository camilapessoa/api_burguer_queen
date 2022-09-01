'use strict';
import path from 'path'
import { readdir } from 'fs';
import { basename as _basename, join, resolve, dirname} from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import configObj from '../config/config.js';
import { fileURLToPath } from 'url';
import { createRequire} from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const basename = _basename(__filename);
//console.log('dirname',__dirname);

const env = process.env.NODE_ENV || 'development';
const config = configObj[env]
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

readdir(__dirname, (err, arr) => {
  return arr.filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))

  .forEach(async(file) => {
    const model = await import(join(__dirname, file))//(sequelize, DataTypes);
    db[model.name] = model
  });
})

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
