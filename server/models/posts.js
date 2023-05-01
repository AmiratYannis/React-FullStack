

module.exports = (Sequelize,DataTypes) =>{
    const Posts= Sequelize.define("Post",{
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull:true,
        }
    });

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
          onDelete: "cascade",
        });
      };

    return Posts;
}