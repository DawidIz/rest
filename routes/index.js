import express from 'express'
import adminRoute from './admin.js'
import userRoute from './user.js'

const router = express.Router()

const auth = (req,res,next) => {
    console.log('Authorization in progress')
    next()
}

//default route
router.get('/',(req,res) => res.send('Homepage'))

// routes
router.use('/admin',auth,adminRoute)
router.use('/user',userRoute)


export default router