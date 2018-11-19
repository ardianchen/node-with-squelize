import multer from 'multer'
import express from 'express'
import { fileInputValidation, inputValidation } from 'src/middlewares'
import imageController from 'src/controllers/image-controller'
import validations from './validations'

const upload = multer({ dest: 'public/tmp/uploads/' })
const router = express.Router()

router.route('/')
  .post(
    upload.single('photo'),
    inputValidation(validations.create),
    fileInputValidation('photo'),
    imageController.create
  )
  .get(
    inputValidation(validations.read),
    imageController.newRead
  )

export default router
