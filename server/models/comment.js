module.exports = (Sequelize, DataTypes) => {
    const Comments = Sequelize.define("Comments", {
      commentBody: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postId:{
        type:DataTypes.INTEGER,
        allowNull:true,
      }
    });
  
    return Comments;
  };