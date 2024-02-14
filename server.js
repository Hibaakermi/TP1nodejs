const express = require('express')
const post = require('./Router/post')


const app = express()
app.use('/post', post)

const router=require('./Router/Router')
app.use('/auth', router)

const port = 9000


app.listen(port,()=>{console.log(`server running on port ${port}`);})
