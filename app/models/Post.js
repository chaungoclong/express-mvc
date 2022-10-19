const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate = model => {
            Post.belongsTo(model['User'], {
                foreignKey: 'user_id'
            });
        }
    }

    Post.init({
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.BIGINT.UNSIGNED,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING
        },
        metaTitle: {
            type: DataTypes.STRING,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        summary: {
            type: DataTypes.TEXT('tiny')
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT
        }
    }, {
        sequelize,
        tableName: 'posts',
        modelName: 'Post'
    });

    return Post;
}
