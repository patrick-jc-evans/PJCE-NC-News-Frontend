import BasicCard from "./basicCard"
import axios from "axios"
import { apiAddress } from "../../../config"
import { useEffect, useState } from "react"

function ArticleStack({ page, topic, sortBy }) {
    const [articles, setArticles] = useState([])

    let fetchURL
    if (topic !== "All Articles")
        fetchURL = `${apiAddress}/articles?topic=${topic}&p=${page}&limit=10&sort_by=${sortBy}`
    else
        fetchURL = `${apiAddress}/articles?p=${page}&limit=10&sort_by=${sortBy}`

    function getArticles() {
        axios.get(fetchURL).then((response) => {
            const fullArticleData = response.data.articles

            const cardData = []
            fullArticleData.forEach((article) => {
                cardData.push([
                    article.article_id,
                    article.title,
                    article.author,
                    article.topic,
                ])
            })

            setArticles(cardData)
        })
    }

    useEffect(() => {
        getArticles()
    }, [page, sortBy])

    if (!articles) {
        return <p className="loading-text">Loading...</p>
    }

    return (
        <>
            {articles.map((article) => {
                return (
                    <BasicCard
                        key={article[0]}
                        article_id={article[0]}
                        main={article[1]}
                        secondary={article[2]}
                    />
                )
            })}
        </>
    )
}

export default ArticleStack
