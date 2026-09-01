const poster = require('./post')

class author {
    constructor(name) {
        this.name = name;
        this.post = [];
    }

  addPost(name) {
    const newPost = new poster(this, name);
    this.post.push(newPost);
    return newPost;
  }
}

module.exports = author;