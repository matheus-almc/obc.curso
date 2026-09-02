const classPost = require('./post')
const ClassComment = require('./comment')
const ClassAuthor = require('./author')

const author1 = new ClassAuthor('John Doe');
const post1 = author1.addPost('My first post');
const comment1 = new ClassComment('Great post!');
post1.addComment(comment1);

console.log(post1)
console.log(author1);
console.log(comment1); 