import ArticleCard from "./articleCard"
import axios from "axios"
import { apiAddress } from "../../../config"
import { useEffect, useState } from "react"

function ArticleStack({ page, topic, sortBy, order, setTopicExists }) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    let fetchURL
    if (topic !== "All Articles")
        fetchURL = `${apiAddress}/articles?topic=${topic}&p=${page}&limit=10&sort_by=${sortBy}&order=${order}`
    else
        fetchURL = `${apiAddress}/articles?p=${page}&limit=10&sort_by=${sortBy}&order=${order}`

    function getArticles() {
        axios
            .get(fetchURL)
            .then((response) => {
                const fullArticleData = response.data.articles

                const cardData = []
                fullArticleData.forEach((article) => {
                    cardData.push([
                        article.article_id,
                        article.title,
                        article.author + " - " + article.topic,

                        `${article.comment_count} ${
                            article.comment_count === 1
                                ? " comment"
                                : " comments"
                        } - ${article.votes} ${
                            article.votes === 1 ? "like" : " likes"
                        }`,

                        article.article_img_url,
                    ])
                })

                setArticles(cardData)
                setLoading(false)
            })
            .catch(() => {
                setTopicExists(false)
                setLoading(false)
            })
    }

    useEffect(() => {
        getArticles()
    }, [page, sortBy, order])

    if (loading) {
        return (
            <p className="loading-text">
                Page Loading. This may take a while due to the api server
                spinning up.
            </p>
        )
    }

    return (
        <>
            {articles.map((article) => {
                return (
                    <ArticleCard
                        key={article[0]}
                        article_id={article[0]}
                        main={article[1]}
                        secondary={article[2]}
                        tertiary={article[3]}
                        image={article[4]}
                    />
                )
            })}
        </>
    )
}

export default ArticleStack
