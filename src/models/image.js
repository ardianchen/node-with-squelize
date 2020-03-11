import { Database } from '../database'
import Sequelize from 'sequelize'

const table = 'member'
module.exports = Database.define(table, {
  // field name
  member_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  member_member_id: {
    type: Sequelize.INTEGER
    // sample validasi
    // validate: {
    //   is: [`"^[a-z]+$"`, 'i'] // will only allow letters
    //   isAlpha: true, // will only allow letters
    // }
  },
  member_deposit_id: {
    type: Sequelize.INTEGER
  },
  member_member_source_id: {
    type: Sequelize.INTEGER
  },
  member_digit_key: {
    type: Sequelize.INTEGER
  },
  member_invoice_number: {
    type: Sequelize.STRING
  },
  member_payment_invoice_number: {
    type: Sequelize.STRING
  },
  member_nominal_in_topup: {
    type: Sequelize.DECIMAL(10, 2)
  },
  member_nominal_income: {
    type: Sequelize.DECIMAL(10, 2)
  },
  member_nominal_in_digit_key: {
    type: Sequelize.DECIMAL(10, 2)
  },
  member_nominal_in_promo: {
    type: Sequelize.DECIMAL(10, 2)
  },
  member_nominal_out_withdraw: {
    type: Sequelize.DECIMAL(10, 2)
  },
  member_nominal_outcome: {
    type: Sequelize.DECIMAL(10, 2)
  },
  member_nominal_out_promo: {
    type: Sequelize.DECIMAL(10, 2)
  },
  member_withdraw_adm: {
    type: Sequelize.INTEGER
  },
  member_desc: {
    type: Sequelize.STRING
  },
  member_withdraw_bank_account: {
    type: Sequelize.STRING
  },
  member_withdraw_bank_name: {
    type: Sequelize.STRING
  },
  member_withdraw_receiver_name: {
    type: Sequelize.STRING
  },
  member_withdraw_sms_code: {
    type: Sequelize.STRING
  },
  member_withdraw_sms_expired: {
    type: Sequelize.DATE
  },
  member_withdraw_payment_bank_account: {
    type: Sequelize.STRING
  },
  member_withdraw_payment_bank_name: {
    type: Sequelize.STRING
  },
  member_type_payment: {
    type: Sequelize.ENUM,
    values: ['transfer', 'ewallet', 'payment_gateway'] // 'transfer','ewallet','payment_gateway'
  },
  member_status_payment: {
    type: Sequelize.ENUM,
    values: ['pending', 'confirmed', 'ok', 'rejected', 'failed'] // 'pending','confirmed','ok','rejected','failed'
  },
  member_input_datetime: {
    type: Sequelize.DATE
  },
  member_due_datetime: {
    type: Sequelize.DATE
  },
  member_withdraw_confirmed_datetime: {
    type: Sequelize.DATE
  },
  member_invalid_note: {
    type: Sequelize.STRING
  },
  member_created_at: {
    type: Sequelize.DATE
  },
  member_updated_at: {
    type: Sequelize.DATE
  }
}, {
  // setup table config
  // tableName: 'member',
  freezeTableName: true,
  underscored: true,
  paranoid: true,
  timestamps: false
})
