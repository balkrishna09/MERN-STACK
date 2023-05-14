const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post
exports.likePost = async (req,res)=>{
    try{
        const{post,user} = req.body;
        const like = new Like({post,user});

        const savedLike = like.save();

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        .populate("likes").exec();

        res.json({
            post:updatedPost,
        });
    }
    catch(err){
        res.status(500).json({
            error:"failed"
        });
    }
}


//unlike a post 
exports.unlikePost = async(req,res)=>{
    try{
        const{post,like} = req.body;
        // const //like = new Like({post,like});

        // const savedLike = like.save();

        //find and delete from likes
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like})

        //update post after deleting
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

        res.json({
            post:updatedPost,
        });

    }
    catch(err){
        return res.status(400).json({
        error:"failed",
        });
    }
}