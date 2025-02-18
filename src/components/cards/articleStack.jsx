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
            {articles.map((article, index) => {
                return (
                    <BasicCard
                        key={index}
                        main={article[0]}
                        secondary={article[1]}
                    />
                )
            })}
        </>
    )
}

export default ArticleStack
