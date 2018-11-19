import express from 'express'
import images from './images'
// import articles from './articles'
// import category from './category'

const router = express.Router()

router.use('/image', images)
// router.use('/articles', articles)
// router.use('/category', category)

export default router
