const express= require('express')
const sequelize = require('./db/sequelize')
const app=express()
const port=3001


const cors= require("cors")


app.use(express.json())
app.use(cors())



const postRouter= require('./routes/posts')
const commentRouter= require('./routes/comments')
const userRouter=require('./routes/users')

app.use("/posts",postRouter)
app.use("/comments",commentRouter)
app.use("/auth",userRouter)

sequelize.initDb()
app.listen(port,()=>console.log(`My server running at : http://localhost:${port}`))


