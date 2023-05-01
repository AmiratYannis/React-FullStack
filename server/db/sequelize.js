
const { Sequelize, DataTypes } = require('sequelize')
const PostModel = require('../models/posts')
const CommentModel = require('../models/comment')
const UserModel=require('../models/users')
const posts=require('../db/mock-posts')
const comments=require('../db/mock-comments')
const users=require('../db/mock-users')



  
const sequelize = new Sequelize('tutorialDB', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})


  
const Post= PostModel(sequelize,DataTypes)
const Comment= CommentModel(sequelize,DataTypes)
const User=UserModel(sequelize,DataTypes)

  
const initDb = () => {
  return sequelize.sync({force: true}).then(() => {
        posts.map(post=>{
            Post.create({
                title:post.title,
                postText:post.postText,
                username:post.username,
                userId: post.userId
            })
        })

        comments.map(comment=>{
          Comment.create({
            commentBody:comment.commentBody
          })
        })

        users.map(user=>{
          User.create({
            username:user.username,
            password:user.password
          })
        })

        console.log('The database has been initialized !')
    
    })
}
  
module.exports = { 
    initDb,Post,Comment,User
}