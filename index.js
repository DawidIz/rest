import dotenv from 'dotenv'
import express from 'express'
import { connect } from './db/connection.js'
import router from './routes/index.js'

dotenv.config()
connect(process.env.DB_USER, process.env.DB_PASSWORD)
const app = express()

app.use(router)

app.listen(process.env.PORT || 3000, () => {
    console.log('listening')
})
