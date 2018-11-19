import status from 'http-status'
import r from '../lib/resjson'

export default () => {
  return (req, res, next) => {
    let response
    if (!req.headers.key) {
      response = r('missing key')
      return res.status(status.BAD_REQUEST).json(response)
    }

    if (req.headers.key !== process.env.TOKEN_KEY) {
      response = r('key not available')
      return res.status(status.BAD_REQUEST).json(response)
    }

    return next()
  }
}
