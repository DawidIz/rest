import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { connect } from './db/connection.js'
// import { showUsers } from './mongoose.js'
// import router from './routes/index.js'

import { addUser, showUsers, removeUser } from './db/controllers/user.js'
connect(process.env.DB_USER, process.env.DB_PASSWORD)
const app = express()

// app.use(router)
app.get('/', (req, res) => res.send('home'))

app.get('/add/:name', async (req, res) => {
    const { name } = req.params
    await addUser({ name })
    await showUsers()
    res.redirect('/')
})

app.get('/remove/:name', async (req, res) => {
    const { name } = req.params
    await removeUser({ name })
    await showUsers()
    res.redirect('/')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening')
})
