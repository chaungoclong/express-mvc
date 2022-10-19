const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate = db => {
            User.hasMany(db['Post'], {
                foreignKey: 'user_id'
            });
        }
    }

    User.init({
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(100),
        },
        lastName: {
            type: DataTypes.STRING(100),
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.CHAR(15),
            unique: true,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        lastLogin: {
            type: DataTypes.DATE
        },
        intro: {
            type: DataTypes.TEXT('tiny')
        },
        profile: {
            type: DataTypes.TEXT
        }
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User'
    });

    return User;
}