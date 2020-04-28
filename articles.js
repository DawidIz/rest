import express from 'express'
const router = express.Router()

//first middleware
router.use(function(req,res,next){
    console.log('dunno')
    next()
})

//then routes
router.get('/articles',(req,res)=>{
    console.log('get /')
    res.send('article /')
})

router.get('/articles/about',(req,res)=>{
    res.send('article about')
})


export default router