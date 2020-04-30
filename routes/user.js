import express from 'express'
import { addUser } from '../db/controllers/user.js'

const router = express.Router()

// app.get('/add/:name', async (req, res) => {
//     const { name } = req.params
//     await addUser({ name })
//     await showUsers()
//     res.redirect('/')
// })

// app.get('/remove/:name', async (req, res) => {
//     const { name } = req.params
//     await removeUser({ name })
//     await showUsers()
//     res.redirect('/')
// })

// CREATE : POST /users
// GET ALL : GET /users
// GET ONE : GET /users/:id
// UPDATE : PUT /users/:id/data ? // how pass throw data like object
// DELETE : DELETE /users/:id

router.get('/', (req, res) => {
    console.log('user')

    res.send('route : user')
})

router.get('/add/:name', (req, res) => {
    console.log('add user')
    const { name } = req.params
    addUser({
        name,
        date: new Date().toString(),
    })
    res.redirect('/')
})

export default router
