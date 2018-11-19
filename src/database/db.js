// import mongoose from 'mongoose'
import Sequelize from 'sequelize'
import config from './config'

module.exports = (() => {
  return new Sequelize(
    process.env.SQL_DATABASENAME,
    process.env.SQL_USER,
    process.env.SQL_PASSWORD,
    config
  )
  // return new Sequelize('mysql://root:toor@localhost:3306/gotraining')
})()
