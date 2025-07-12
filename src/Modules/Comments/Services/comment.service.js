import Comment from "../../../DB/Models/comment.model.js";
import { Op, where } from "sequelize";
import User from "../../../DB/Models/user.model.js";
import Post from "../../../DB/Models/post.model.js";
export const addcomments=async(req,res)=>{

try {


    const {comments}=req.body;

     if (!comments || comments.length === 0) {
      return res.status(400).json({
        message: "No comments provided",
      });
    }


const added = await Comment.bulkCreate(comments, {
    validate:true
});

return res.status(200).json({

    message :"comments created"
})



  }


catch(err)
{

return res.status(500).json({

    message :err.message
})

}
}


export const UpdateComment =async(req,res)=>{

try {

    const commentId=req.params.commentId;
    const {userid,content}=req.body;


    const commentFind = await Comment.findByPk(commentId);
    if (!commentFind) {
    return res.status(404).json({

    message :"comment not found"
})
    } 


   if (commentFind.fkUserId==userid)
   {
            await Comment.update(
                {content},{ 
             where: {
        id: commentId,
    },
    });

    return res.status(200).json({

    message :`Comment updated`
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


export const FindOrCreate =async(req,res)=>{
try {


    const {postId,userId,content}=req.body;

     if (!postId || !userId || !content) {
      return res.status(400).json({
        message: "enter all the fields",
      });
    }
          


const added = await Comment.findOrCreate({
  where: {
    fkUserId: userId,
    fkPostId: postId,
    content: content 
  }, defaults: {
    fkUserId: userId,
    fkPostId: postId,
    content: content
  }
});

return res.status(200).json({

   added
})



  }


catch(err)
{

return res.status(500).json({

    message :err.message
})

}
}


 export  const SearchAndGetAll= async (req,res)=>
  {
        try
        {  
            
            const { word } = req.query;
            
            const allcomments= await Comment.findAll({

where :
{
    content:
    {
        [Op.substring] : `${word}`
    }

},





            })



             const count = await Comment.count({
      where: {
        content: {
          [Op.substring]: `${word}`
        }
      }
    });


 if (allcomments.length === 0) {
      return res.status(404).json({ message: "no comments found." });
    }

    return res.status(200).json({
      count,
      allcomments
    });




        }

      catch(err)
{

return res.status(500).json({

    message :err.message
})

}


  }


 export  const GetRecentPosts = async (req,res) =>{

try{
const fkPostId =req.params.postId;


            const allcomments= await Comment.findAll({

where :
{
    fkPostId,
    

},

order: [['createdAt', 'DESC']]

,

limit:3




            })



            return res.status(200).json(

   allcomments
)


        }

        catch(err)
        {
         
return res.status(500).json({

    message :err.message
})
        }
  }





  export const GetSpecificComment =async (req,res)=>{

try{

const id= req.params.id;

const specificComment= await Comment.findByPk(id,{
    include :
    [{
        model:User,
    as:'user_info',
        attributes:['id','name','email']

    },

    {
        model :Post,
        as:'comments',
                 attributes:['id','title','content']
    }
    ],
    attributes : ['id','content']

})

if (specificComment===null)
{
    return res.status(404).json({

    message :"comment not found"
})
}



return res.status(200).json(

specificComment
)



}


catch(err)
{

    return res.status(500).json({

    message :err.message
})


}

  }