const poster = require('./post')
const comenter = require('./comment')
const author = require('./author')

const comment1 = new comenter('Muito bom!')
const comment2 = new comenter('Gostei do post!')

const author1 = new author('Matheus')
const author2 = new author('João')

const post1 = new poster(author1, comment1)
const post2 = new poster(author2, comment2)

author1.addPost(author1, comment1)
author2.addPost(author2, comment2)

console.log(post1)
console.log(post2)