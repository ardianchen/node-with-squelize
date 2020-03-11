import memberDepositDetail from '../../models/transaction'
import { Database } from '../../../database'
import moment from 'moment'

const getExpired = async () => new Promise(async (resolve, reject) => {
  // const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
  let now = moment().format('YYYY-MM-DD HH:mm:ss')
  const data = memberDepositDetail.findAll({
    where: {
      member_status_payment: 'pending',
      member_due_datetime: {
        [Database.Op.ne]: '',
        [Database.Op.lt]: now
        // op.lte digunakan untuk operator <=
        // more info : http://docs.sequelizejs.com/manual/tutorial/models-usage.html
      }
    }
  })
  resolve(data)
})

const getExpiredAndUpdate = async () => new Promise(async (resolve, reject) => {
  let getEx = ''
  getEx = await getExpired()
  if (getEx) {
    for (let i in getEx) {
      memberDepositDetail.update({
        member_status_payment: 'failed',
        member_invalid_note: 'expired transaction'
      }, {
        where: {
          member_id: getEx[i].member_id
        }
      })
    }
  }
  resolve(getEx)
})

const getOkMaxOneHour = async () => new Promise(async (resolve, reject) => {
  // const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
  // let plusOneHour = moment().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss')
  let now = moment().format('YYYY-MM-DD HH:mm:ss')
  let minOneHour = moment().subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss')
  // console.log(minOneHour)
  const data = memberDepositDetail.findAll({
    where: {
      member_type_payment: 'transfer',
      member_status_payment: 'ok',
      member_updated_at: {
        [Database.Op.between]: [minOneHour, now]
      },
      member_nominal_outcome: {
        [Database.Op.gt]: 0
      }
    }
  })
  resolve(data)
})

export default {
  getExpired,
  getExpiredAndUpdate,
  getOkMaxOneHour
}
