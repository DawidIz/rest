import express from 'express'

const router = express.Router()

router.get('/users',(req,res) => {
    res.send('Users')
})

//'/rpi/pin/:pin.:value'
router.get('/user/:userId',(req,res) => {
    res.send(req.params)
})


// router.get('/user/login/:login-:password',(req,res,next) => {
//     req.params.password += '#hashed'
//     next()
// },(req,res) => {
//     res.send(req.params)
// })

router.get('/user/login/:login-:password',(req,res,next) => {
    // req.params.password += '#hashed'
    const {login,password} = req.params
    if(login === 'admin' && password ==='admin')
        next()
    else next('route')
},(req,res) => {
    //admin panel
    res.send('Admin panel')
})

router.get('/user/login/:login-:password',(req,res,next) => {
    res.send('User logged')
})

//-----------------------------------------------

const auth = (req,res,next) => {


    next()
}

router.use('/admin/:isAdmin',(req,res,next) => {
    console.log('checking admin')
    const {isAdmin} = req.params

    if(isAdmin === 'true') res.send('ADMIN')
    
    else next()
})

router.get('/admin/:isAdmin',(req,res)=>{
    res.send('NOT ADMIN')
})

export default router

// npm : passport

//import userRoutes from './routes/user'


// auth middleware
// const auth = (req,res,next) => {
//     try {
//         if(false){
//             throw new Error('sth is no yes')
//         }
//         else {
//             next()
//         }
//     }
//     catch(err) {
//         console.error(err)
//     }
// }

//router.use('/admin',auth,addUser)