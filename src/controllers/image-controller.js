import status from 'http-status'
import { Image } from '../models'
import r from '../lib/resjson'

const create = async (req, res) => {
  const { body } = req
  let response
  const query = await Image.create({
    images_member_code: body.member_code
  })
  response = r(201, 'image uploaded', query)
  res.status(status.CREATED).json(response)
}

const newRead = async (req, res) => {
  let response
  const image = await Image.get()

  response = r(200, 'found', image)
  res.status(status.OK).json(response)
}

export default {
  create,
  // read,
  newRead
}
