import express from 'express'
import {addUser} from '../mongoose.js'

const router = express.Router()

router.get('/',(req,res) => {
    console.log('user')

    res.send('route : user')
})

router.get('/add/:name',(req,res) => {
    console.log('add user')
    const {name} = req.params
    addUser({
        name,
        date : new Date().toString()
    })
    res.redirect('/')
})




export default router