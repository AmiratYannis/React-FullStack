const express = require('express')
const router = express.Router()
const {User} =require("../db/sequelize")
const bcrypt=require("bcrypt")
const {sign} = require('jsonwebtoken')


router.post("/", async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
      User.create({
        username: username,
        password: hash,
      });
      res.json("SUCCESS");
    });
});

router.post("/login", async(req,res)=>{
  const { username, password } = req.body;
  const user = await User.findOne({where:{username:username}});

  if(!user){
    res.json({error:"User doen't exist"})
  }
  console.log(user)
  bcrypt.compare(password,user.password).then((match)=>{
      if(!match){
        res.json({error:"password or username is incorrect"})
      }
      const accessToken=sign(
        {username:user.username, id:user.id},
        "importantesecret"
      );
      res.json(accessToken)
    })
  
 
})

module.exports=router;