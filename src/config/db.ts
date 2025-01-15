
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


export const DB_HOST = process.env.DB_HOST as string;
export const DB_PORT = process.env.DB_PORT as number | undefined;
export const DB_USER = process.env.DB_USER as unknown as string;
export const DB_PASS = process.env.DB_PASS as unknown as string;
export const DB_NAME = process.env.DB_NAME as unknown as string;

export const sequelize = new Sequelize(
    DB_NAME,DB_USER,DB_PASS,{
        host: DB_HOST,
        dialect: 'postgres'
    }
)


