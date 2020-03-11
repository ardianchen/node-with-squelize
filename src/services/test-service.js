import transaction from '../service/invoice-service'
import socketExp from '../../client-request/controller/invoice-handling'

export default async () => new Promise(async (resolve, reject) => {
  let exp = ''
  exp = await transaction.getExpiredAndUpdate()
  if (exp.length > 0) {
    await socketExp.toSendExpired(exp)
  }
})
