module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Posts', {
    author: DataTypes.STRING,
    place: DataTypes.STRING,
    description: DataTypes.STRING,
    hashtags: DataTypes.STRING,
    image: DataTypes.STRING,
    likes: DataTypes.INTEGER
  });

  return Post;
};
