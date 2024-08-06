import { Sequelize } from 'sequelize-typescript';
import { Tableusers } from '../models/tableUsers';
import { TableRols } from '../models/tableRoles';
import env from 'dotenv'
import { TableProducts } from '../models/tableProduct';
import { cart } from '../models/cart';
import { Orders } from '../models/order';
import { productCar } from '../models/productCar';


env.config()

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Tableusers,TableRols,TableProducts,cart,Orders,productCar] 
});
export default sequelize