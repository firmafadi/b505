// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.config";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const User = db.define('users', {
  // Define attributes
  id: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  created_at :{
    type: DataTypes.DATE
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default User;