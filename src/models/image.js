import { Database } from '../database'
import Sequelize from 'sequelize'

const table = 'images'

const newRead = Database.define(table, {
  images_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  images_member_code: {
    type: Sequelize.STRING
  },
  images_created_at: {
    type: Sequelize.DATE
  },
  images_updated_at: {
    type: Sequelize.DATE
  }
})

const get = async (id) => new Promise(async (resolve, reject) => {
  resolve(newRead.findAll())
})

export default {
  get
}
