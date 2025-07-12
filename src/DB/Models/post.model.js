import { Model, DataTypes } from 'sequelize';
import { sequelizeConnection } from '../db.connection.js';
import User from './user.model.js';

/**
 *id title content userid 
 timestamp 
 */
class Post extends Model {



}



Post.init(

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

      
        title :
        {
            type : DataTypes.STRING,
            allowNull:false,
              min:5
        },
           fkUserId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }




    },
    
    
    
    {
        sequelize: sequelizeConnection,
         paranoid: true,
        modelName: "post",
        timestamps:true

    }
)

Post.belongsTo(User,{

  foreignKey:{
    name:"fkUserId"
  },
  onDelete:'CASCADE',
  onUpdate:'CASCADE',
  as:'user_data'
})


User.hasMany(Post,{

  foreignKey:{
    name:"fkUserId"
  },
  onDelete:'CASCADE',
  onUpdate:'CASCADE',
  as:'user_data'
})

export default Post