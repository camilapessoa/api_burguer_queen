"use strict";
import path from "path";
import fs from "fs";
import { readdirSync } from "fs";
import { basename as _basename, join, resolve, dirname } from "path";
import Sequelize, { DataTypes } from "sequelize";
import configObj from "../config/config.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || "development"; // splitar para um arquivo separado
const config = configObj[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdir(__dirname, (err, dir) => {
  const x = dir.filter(async (file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === ".mjs"
      );
    })
    x.forEach(async (file) => {
      let banana = join(__dirname, file);
      const a = banana. 
        replace(/C:/g, 'file:/').
        replace(/\\/g, '/');

      const model = await import(a);
      const x = model.default(sequelize, Sequelize.DataTypes);
      db[model.name] = x;
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

// syscall: 'stat',
// code: 'UNKNOWN',
// path: '\\\\users\\Camila\\Desktop\\Camila
// \\node\\api_burguer_queen\\db\\models\\inde
// x.mjs'