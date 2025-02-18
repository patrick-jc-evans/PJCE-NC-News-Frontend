import { useLocation } from "react-router"
import "./article.css"
import { useEffect, useState } from "react"
import axios from "axios"

function Article() {
    const [articleData, setArticleData] = useState(null)
    const searchParams = new URLSearchParams(useLocation().search)
    const article_id = searchParams.get("id")

    function getArticleData(id) {
        axios
            .get(`https://pjce-nc-news.onrender.com/api/articles/${id}`)
            .then((response) => {
                console.log(response.data)

                let keys = Object.keys(response.data.article)
                keys.sort()

                setArticleData(keys.map((key) => response.data.article[key]))
            })
    }

    useEffect(() => {
        getArticleData(article_id)
    }, [])

    if (!articleData) {
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
        </>
    )
}

export default Article

// ['article_id', 'article_img_url', 'author', 'body', 'comment_count', 'created_at', 'title', 'topic', 'votes']
