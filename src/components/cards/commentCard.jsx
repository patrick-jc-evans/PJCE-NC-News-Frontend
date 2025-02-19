import { useState } from "react"
import { apiAddress, user } from "../../../config"
import axios from "axios"
import "../components.css"

function CommentCard({ commentID, avatarURL, author, body }) {
    const [commentDeleted, setCommentDeleted] = useState(false)
    const [commentDeleteFailed, setCommentDeleteFailed] = useState(false)

    function deleteComment() {
        const url = `${apiAddress}/comments/${commentID}`

        axios
            .delete(url)
            .then((response) => {
                if (response.status === 204) {
                    setCommentDeleted(true)
                }
            })
            .catch(() => {
                setCommentDeleteFailed(true)
            })
    }

    function deleteCommentButton() {
        if (author === user) {
            return (
                <button
                    className="delete-comment-button"
                    onClick={deleteComment}
                >
                    Delete Comment
                </button>
            )
        }
    }

    if (!commentDeleted)
        return (
            <section className="comment-card">
                <p className="bc-main-text">{author}</p>
                <p className="bc-secondary-text">{body}</p>
                <>{deleteCommentButton()}</>
            </section>
        )
    else if (commentDeleteFailed)
        return (
            <section className="comment-card">
                <p className="bc-main-text">{author}</p>
                <p className="bc-secondary-text">
                    Server Error: Comment could not be deleted
                </p>
                <>{deleteCommentButton()}</>
            </section>
        )
    else
        return (
            <section className="comment-card">
                <p className="bc-main-text">{author}</p>
                <p className="bc-secondary-text">Comment Deleted</p>
            </section>
        )
}

export default CommentCard
