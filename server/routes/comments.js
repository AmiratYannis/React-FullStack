const express = require('express')
const router = express.Router()
const {Comment} = require('../db/sequelize');
const { validateToken } = require('../middlewares/AuthMiddleware');



router.get('/:postId',async (req,res)=>{
    const postId=req.params.postId;
    const comments = await Comment.findAll({ where:{postId:postId} })
    res.json(comments)
})

router.post("/",validateToken,async (req,res)=>{
    const comment=req.body;
    await Comment.create(comment)
    res.json(comment)

})

module.exports=router;