class post {
    constructor(author) {
        this.author = author;
        this.comments = [];
    }

    addComment(comments) {
        this.comments.push(comments);
    }
}

module.exports = post;