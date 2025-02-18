import { useLocation } from "react-router"
import "./article.css"
import { useEffect, useState } from "react"
import axios from "axios"
import CommentStack from "../../components/cards/commentStack"
import VoteButtons from "../../components/buttons/voteButtons"

function Article() {
    const [articleData, setArticleData] = useState(null)
    const [commentData, setCommentData] = useState(null)
    const searchParams = new URLSearchParams(useLocation().search)
    const article_id = searchParams.get("id")

    function getArticleData(id) {
        axios
            .get(`https://pjce-nc-news.onrender.com/api/articles/${id}`)
            .then((response) => {
                let keys = Object.keys(response.data.article)
                keys.sort()
                setArticleData(keys.map((key) => response.data.article[key]))
            })
    }

    function getArticleComments(id) {
        axios
            .get(
                `https://pjce-nc-news.onrender.com/api/articles/${id}/comments`
            )
            .then((response) => {
                let keys = Object.keys(response.data.comments[0])
                keys.sort()
                let commentArray = response.data.comments

                commentArray = commentArray.map((comment) => {
                    return keys.map((key) => comment[key])
                })

                setCommentData(commentArray)
            })
    }

    useEffect(() => {
        getArticleData(article_id)
        getArticleComments(article_id)
    }, [])

    if (!articleData || !commentData) {
        return <p>Loading...</p>
    }

    return (
        <>
            <article>
                <p className="article-topic">{"-=" + articleData[7] + "=-"}</p>
                <h2 className="article-title">{articleData[6]}</h2>
                <h3 className="article-author">{"by " + articleData[2]}</h3>
                <img src={articleData[1]} className="article-img"></img>
                <p className="article-body">{articleData[3]}</p>
            </article>

            <VoteButtons id={articleData[0]} votes={articleData[8]} />

            <CommentStack comments={commentData} />
        </>
    )
}

export default Article

// ['article_id', 'article_img_url', 'author', 'body', 'comment_count', 'created_at', 'title', 'topic', 'votes']
// ['article_id', 'author', 'body', 'comment_id', 'created_at', 'votes']
