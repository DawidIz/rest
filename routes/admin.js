import express from 'express'

const router = express.Router()

// router.use((req,res,next) => {
//     console.log('middleware')
//     next()
// })

router.get('/',(req,res) => {
    console.log('admin')
    res.send('route : admin')
})

export default router