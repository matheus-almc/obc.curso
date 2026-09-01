class comment {
    constructor(comment) {
        this.comment = comment;
    }

    fullcomment() {
        return `Comentário: ${this.comment}`;
    }
}

module.exports = comment;