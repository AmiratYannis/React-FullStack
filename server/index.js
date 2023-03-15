const express= require('express')
const sequelize = require('./db/sequelize')
const app=express()
const port=3001


const cors= require("cors")


app.use(express.json())
app.use(cors())



const postRouter= require('./routes/posts')
const commentRouter= require('./routes/comments')

app.use("/posts",postRouter)
app.use("/comments",commentRouter)

sequelize.initDb()
app.listen(port,()=>console.log(`My server running at : http://localhost:${port}`))


