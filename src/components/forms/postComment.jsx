import axios from "axios"
import { apiAddress } from "../../../config"
import { useState } from "react"

function PostComment({ articleID, username }) {
    //temporary
    username = "grumpy19"

    const [commentSubmitted, setCommentSubmitted] = useState(false)
    const [commentAccepted, setCommentAccepted] = useState(false)
    const [commentRejected, setCommentRejected] = useState(false)

    function postCommentToApi(body) {
        const url = `${apiAddress}/articles/${articleID}/comments`
        console.log(url)
        console.log(body)

        setCommentSubmitted(true)

        axios
            .post(url, { username, body })
            .then((response) => {
                if (response.status === 201) {
                    setCommentAccepted(true)
                }
            })
            .catch(() => setCommentRejected(true))
    }

    function displaySubmissionResult() {}

    let commentBody = ""

    return (
        <>
            <form>
                <input
                    placeholder="Type comment"
                    type="text"
                    onChange={(e) => {
                        commentBody = e.target.value
                    }}
                />
                <input
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        console.log(commentBody)
                        postCommentToApi(commentBody)
                    }}
                />
            </form>
            <p></p>
        </>
    )
}

export default PostComment
