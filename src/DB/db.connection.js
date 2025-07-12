

import Sequelize from 'sequelize';

export const sequelizeConnection = new Sequelize('crudapp', 'root', 'Bibabiba2004@', {
  host: 'localhost',
  dialect: 'mysql' 
});

export const test =async ()=>  {
try {
  await sequelizeConnection.sync({alter:true,force:false});
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}



