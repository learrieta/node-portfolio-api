import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export class Info extends Model {
    public id!: number;
    public name!: string;
    public title!: string;
    public description!: string;
    public fun!: string;
}
  
Info.init({
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
},
name: {
    type: DataTypes.STRING,
    allowNull: false,
},
title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
},
description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
},
fun: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
},
}, {
sequelize,
modelName: 'Info',
});
  
