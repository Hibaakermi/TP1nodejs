const express = require ('express')

const path = require ('path')

const router=express.Router()

router.get('/login', (req, res)=>{

    res.send("<h1>Bonjour</h1>")
})
router.get('/register',(req, res)=>{

    res.sendFile(path.join(__dirname, "../index.html"))
})
module.exports=router