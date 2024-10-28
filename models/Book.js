// models/User.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // adjust path as needed
import { Borrower } from './Borrower.js';

export const Book = sequelize.define('Books', {
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false
    },
    borrowerId:{
        type:DataTypes.INTEGER,
        references:{
            model:Borrower,
            key:'id'
        }
    }
});

Book.belongsTo(Borrower, {
    foreignKey: 'borrowerId',
    onDelete: 'SET NULL'
});