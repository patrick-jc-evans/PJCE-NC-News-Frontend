import { useState } from "react"
import NextPageButton from "../../components/buttons/nextPageButton"
import ArticleStack from "../../components/cards/articleStack"
import "./articles.css"
import { useLocation } from "react-router"

function Articles() {
    const [page, setPage] = useState(1)

    const searchParams = new URLSearchParams(useLocation().search)
    let topicQuery = searchParams.get("topic")

    topicQuery = topicQuery ? topicQuery : "All Articles"

    return (
        <main>
            <h2>{topicQuery[0].toUpperCase() + topicQuery.slice(1)}</h2>
            <ArticleStack page={page} topic={topicQuery} />
            <NextPageButton page={page} setPage={setPage} />
        </main>
    )
}

export default Articles
