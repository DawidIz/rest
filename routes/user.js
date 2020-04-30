import express from 'express'
import userController from '../controllers/user.js'

const router = express.Router()

// app.get('/add/:name', async (req, res) => {
//     const { name } = req.params
//     await userController.add({ name })
//     await userController.show()
//     res.redirect('/')
// })

// app.get('/remove/:name', async (req, res) => {
//     const { name } = req.params
//     await userController.remove({ name })
//     await userController.show()
//     res.redirect('/')
// })

// CREATE : POST /users
// GET ALL : GET /users
// GET ONE : GET /users/:id
// UPDATE : PUT /users/:id/data ? // how pass throw data like object
// DELETE : DELETE /users/:id

router
    .route('/')
    .post((req, res) => {
        res.send('created user')
    })
    .get((req, res) => {
        res.send('USERS')
    })

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params
        res.send(`user id: ${id}`)
    })
    .put((req, res) => {
        const { id } = req.params
        const { value } = req.query
        res.send(`update user id: ${id} data = ${value}`)
    })
    .delete((req, res) => {
        const { id } = req.params
        res.send(`deleted user id: ${id}`)
    })

export default router
