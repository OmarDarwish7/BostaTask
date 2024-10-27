// models/User.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // adjust path as needed

export const Borrower = sequelize.define('Borrowers',{
    name:{
    type: DataTypes.STRING,
    allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    registered_date:{
        type: DataTypes.DATE,
        allowNull:false
    }

});