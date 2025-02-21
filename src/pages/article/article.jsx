import { useLocation } from "react-router"
import "./article.css"
import { useEffect, useState } from "react"
import axios from "axios"
import CommentStack from "../../components/cards/commentStack"
import VoteButtons from "../../components/buttons/voteButtons"
import PostComment from "../../components/forms/postComment"
import { apiAddress, user } from "../../../config"

function Article() {
    const [articleData, setArticleData] = useState(null)
    const [commentData, setCommentData] = useState(null)
    const [articleExists, setArticleExists] = useState(true)

    const searchParams = new URLSearchParams(useLocation().search)
    const article_id = searchParams.get("id")

    const [refreshComments, setRefreshComments] = useState(false)

    function getArticleData(id) {
        axios
            .get(`${apiAddress}/articles/${id}`)
            .then((response) => {
                let keys = Object.keys(response.data.article)
                keys.sort()
                setArticleData(keys.map((key) => response.data.article[key]))
            })
            .catch(() => setArticleExists(false))
    }

    function getArticleComments(id) {
        axios
            .get(`${apiAddress}/articles/${id}/comments`)
            .then((response) => {
                let keys = Object.keys(response.data.comments[0])
                keys.sort()
                let commentArray = response.data.comments

                commentArray = commentArray.map((comment) => {
                    return keys.map((key) => comment[key])
                })

                setCommentData(commentArray)
            })
            .catch(() => setArticleExists(false))
    }

    useEffect(() => {
        getArticleData(article_id)
        getArticleComments(article_id)
    }, [refreshComments])

    if (!articleExists) {
        return (
            <p className="loading-text">
                <br />
                <br />
                404: Article not found.
            </p>
        )
    } else if (!articleData || !commentData) {
        return (
            <p className="loading-text">
                <br />
                <br />
                Loading...
            </p>
        )
    } else
        return (
            <>
                <article>
                    <p className="article-topic">
                        {"-=" + articleData[7] + "=-"}
                    </p>
                    <h2 className="article-title">{articleData[6]}</h2>
                    <h3 className="article-author">{"by " + articleData[2]}</h3>
                    <img src={articleData[1]} className="article-img"></img>
                    <p className="article-body">{articleData[3]}</p>
                </article>

                <VoteButtons id={articleData[0]} votes={articleData[8]} />
                <PostComment
                    articleID={articleData[0]}
                    username={user}
                    setRefreshComments={setRefreshComments}
                />
                <CommentStack
                    comments={commentData}
                    refreshComments={refreshComments}
                />
            </>
        )
}

export default Article

// ['article_id', 'article_img_url', 'author', 'body', 'comment_count', 'created_at', 'title', 'topic', 'votes']
// ['article_id', 'author', 'body', 'comment_id', 'created_at', 'votes']
