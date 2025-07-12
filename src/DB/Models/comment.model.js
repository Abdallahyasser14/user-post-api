import { Model, DataTypes } from 'sequelize';
import { sequelizeConnection } from '../db.connection.js';
import User from './user.model.js';
import Post from './post.model.js';

/**
 *id title content userid 
 timestamp 
 */
class Comment extends Model {



}



Comment.init(

    {
        id :{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        content :
        {
            type : DataTypes.TEXT,
            allowNull:false,
           
        },

         fkPostId :{
            type: DataTypes.INTEGER,
           allowNull: false
         
        },
      
           fkUserId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }




    },
    
    
    
    {
        sequelize: sequelizeConnection,
         paranoid: true,
        modelName: "comment",
        timestamps:true

    }
)

Comment.belongsTo(User,{

  foreignKey:{
    name:"fkUserId"
  },
  onDelete:'CASCADE',
  onUpdate:'CASCADE',
  as:'user_info'
})


User.hasMany(Comment,{

  foreignKey:{
    name:"fkUserId"
  },
  onDelete:'CASCADE',
  onUpdate:'CASCADE',
  as:'user_info'
})



Comment.belongsTo(Post,{

  foreignKey:{
    name:"fkPostId"
  },
  onDelete:'CASCADE',
  onUpdate:'CASCADE',
  as:'comments'
})


Post.hasMany(Comment,{

  foreignKey:{
    name:"fkPostId"
  },
  onDelete:'CASCADE',
  onUpdate:'CASCADE',
  as:'comments'
})





export default Comment