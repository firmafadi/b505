// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('exp_db', 'root', '777123', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
export default db;