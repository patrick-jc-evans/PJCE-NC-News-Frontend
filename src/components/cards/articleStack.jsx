import BasicCard from "./basicCard"
import axios from "axios"
import { apiAddress } from "../../../config"
import { useEffect, useState } from "react"

function ArticleStack({ page }) {
    const [articles, setArticles] = useState([])

    function getArticles() {
        axios
            .get(`${apiAddress}/articles?p=${page}&limit=10&sort_by=created_at`)
            .then((response) => {
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
    }, [page])

    if (!articles) {
        return <p>Loading...</p>
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
