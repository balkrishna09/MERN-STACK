//import schema or model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async(req, res)=>{
    try{
        const {post,user,body}= req.body;
        const comment = new Comment({
            post,
            user,
            body
        });
        
        //save comment in db
        const savedComment = await comment.save();

        //find the post by ID and add the new comment to its Comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments:savedComment._id}},{new : true})
        .populate('comments')
        .exec();

        res.json({
            post:updatedPost,
        });

    }
    catch(err){
        return res.status(500).json({
            error:err 
        });
    }
}