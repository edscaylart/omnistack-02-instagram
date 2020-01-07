const { Posts } = require('../models');

module.exports = {
  async store(req, res) {
    const post = await Posts.findByPk(req.params.id);

    post.likes += 1;
    await Posts.update({ likes: post.likes }, { where: { id: req.params.id } });

    req.io.emit('like', post);

    return res.json(post);
  }
};
