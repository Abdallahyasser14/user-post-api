import { sequelizeConnection } from "../db.connection.js";
import { DataTypes } from "sequelize";
const User = sequelizeConnection.define(
  'User',
  {
   id :{
    type :DataTypes.INTEGER,
     primaryKey: true,
    autoIncrement: true
},
  name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
         allowNull: false,
        validate :{
            isEmail:true
        }
         
      
    },

    password :
    {
 type: DataTypes.STRING,
      allowNull: false

    },


    role :
    {
         type: DataTypes.ENUM("user","admin"),
         allowNull: false
    }
  },
  {
timestamps: true,
 paranoid: true,
 indexes: [
    {
      name: 'idx_email_unique',    
      unique: true,                  
      fields: ['email']              
    }]
    
  }
);


export default User;