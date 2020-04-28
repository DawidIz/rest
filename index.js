import express from 'express'
import dotenv from 'dotenv'
// import './mongoose.js'
import {showUsers} from './mongoose.js'
import router from './routes/index.js'

dotenv.config()

const app = express()

app.use(router)

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('listening')
})

