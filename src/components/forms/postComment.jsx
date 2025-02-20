import axios from "axios"
import { apiAddress } from "../../../config"
import { useState } from "react"

function PostComment({ articleID, username, setRefreshComments }) {
    const [commentSubmitted, setCommentSubmitted] = useState(false)
    const [commentAccepted, setCommentAccepted] = useState(false)
    const [commentRejected, setCommentRejected] = useState(false)

    function postCommentToApi(body) {
        const url = `${apiAddress}/articles/${articleID}/comments`

        setRefreshComments(false)
        setCommentAccepted(false)
        setCommentRejected(false)

        if (body && !commentSubmitted) {
            setCommentSubmitted(true)
            axios
                .post(url, { username, body })
                .then((response) => {
                    if (response.status === 201) {
                        setCommentAccepted(true)
                        setCommentSubmitted(false)
                        setRefreshComments(true)
                    }
                })
                .catch(() => setCommentRejected(true))
        } else setCommentRejected(true)
    }

    function displaySubmissionResult() {
        if (commentRejected) {
            return (
                <p className="comment-submission" id="rejected">
                    Comment failed to post or you <br /> attempted to post
                    duplicate immediately
                </p>
            )
        }
        if (commentAccepted) {
            return (
                <p className="comment-submission" id="accepted">
                    Comment Posted
                </p>
            )
        }
        if (commentSubmitted) {
            return (
                <p className="comment-submission" id="pending">
                    Posting comment...
                </p>
            )
        }
    }

    let commentBody = ""

    return (
        <>
            <form className="post-comment">
                <p className="post-comment-label">Post a comment:</p>
                <textarea
                    className="comment-input"
                    placeholder="Type comment"
                    type="text"
                    onChange={(e) => {
                        commentBody = e.target.value
                    }}
                />
                <br />
                <input
                    type="submit"
                    className="submit-comment-button"
                    onClick={(e) => {
                        e.preventDefault()
                        postCommentToApi(commentBody)
                    }}
                />
            </form>
            <>{displaySubmissionResult()}</>
        </>
    )
}

export default PostComment
