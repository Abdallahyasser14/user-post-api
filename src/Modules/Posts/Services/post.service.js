import { where } from "sequelize";
import Post from "../../../DB/Models/post.model.js";
import User from "../../../DB/Models/user.model.js";
import Comment from "../../../DB/Models/comment.model.js";
import { Sequelize } from 'sequelize';


export const createPost =async(req,res)=>{

try {


    const {title,content,userid}=req.body;


    const userfind = await User.findByPk(userid);
    if (!userfind) {
    return res.status(404).json({

    message :"user not found"
})
    } 
 

  const insertone= await Post.create({title,content, fkUserId:userid})
return res.status(200).json({

    message :`post added `
})

}

catch(err)
{

return res.status(500).json({

    message :err.message
})

}
}


export const Deletepost =async(req,res)=>{

try {

    const postId=req.params.postId;
    const {userid}=req.body;


    const userfind = await Post.findByPk(postId);
    if (!userfind) {
    return res.status(404).json({

    message :"post not found"
})
    } 


   if (userfind.fkUserId==userid)
   {
            await Post.destroy({
             where: {
        id: postId,
    },
    });

    return res.status(200).json({

    message :`post deleted`
})



   }

   else
   {

        return res.status(404).json({

    message :`you dont have access`
})

   }
 


}

catch(err)
{

return res.status(500).json({

    message :err.message
})

}
}



export const GetAlldetails =async(req,res)=>{

try {




    const userfind = await Post.findAll( {
include :[

    {model:User,
        as:'user_data',
    attributes: ['name']},

     {model:Comment,
        as:'comments',
    attributes: ['id','content']},
],

attributes:  ['id','title'] 

    });
    if (!userfind) {
    return res.status(404).json({

    message :"no posts"
})
    } 


   

    return res.status(200).json(

   userfind
)


}

catch(err)
{

return res.status(500).json({

    message :err.message
})

}
}


export const CountComments =async(req,res)=>{

try {




   const posts = await Post.findAll({
  attributes: [
    'id', 
    'title',
    [Sequelize.fn('COUNT', Sequelize.col('comments.id')), 'commentCount']
  ],
  include: [
    { model: Comment,
        as:'comments',
        attributes: [] }
  ],
  group: ['Post.id']
});

   

    return res.status(200).json(

   posts
)


}

catch(err)
{

return res.status(500).json({

    message :err.message
})

}
}
