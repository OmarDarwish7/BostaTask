import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { Book } from './Book.js';
import { Borrower } from './Borrower.js';

export const BorrowHistoryType = {
    BORROWED: 1,
    RETURNED: 2
};

export const BorrowHistory = sequelize.define('BorrowHistory',{
    borrowerId:{
        type:DataTypes.INTEGER,
        references:{
            model:Borrower,
            key:'id'
        }
    },
    bookId:{
        type:DataTypes.INTEGER,
        references:{
            model:Borrower,
            key:'id'
        }
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: BorrowHistoryType.BORROWED,
        validate: {
            isIn: [[BorrowHistoryType.BORROWED, BorrowHistoryType.RETURNED]]
        }
    },
    borrowedDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    returnedDate:{
        type: DataTypes.DATE,
        allowNull: true
    },
    dueDate:{
        type:DataTypes.DATE,
        allowNull:false
    }

},{ freezeTableName: true });

BorrowHistory.belongsTo(Borrower, {
    foreignKey: 'borrowerId',
    onDelete: 'CASCADE'
});

BorrowHistory.belongsTo(Book, {
    foreignKey: 'bookId',
    onDelete: 'CASCADE'
});