function CommentCard({ avatarURL, author, body }) {
    return (
        <section>
            <section className="comment-card">
                <p className="bc-main-text">{author}</p>
                <p className="bc-secondary-text">{body}</p>
            </section>
        </section>
    )
}

export default CommentCard
