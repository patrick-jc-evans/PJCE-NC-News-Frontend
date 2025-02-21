import { useState } from "react"
import NextPageButton from "../../components/buttons/nextPageButton"
import ArticleStack from "../../components/cards/articleStack"
import "./articles.css"
import { useLocation } from "react-router"
import SortByDropdown from "../../components/buttons/sortby"

function Articles() {
    const [page, setPage] = useState(1)
    const [sortBy, setSortBy] = useState("created_at")
    const [order, setOrder] = useState("desc")
    const [topicExists, setTopicExists] = useState(true)

    const searchParams = new URLSearchParams(useLocation().search)
    let topicQuery = searchParams.get("topic")

    topicQuery = topicQuery ? topicQuery : "All Articles"

    if (!topicExists)
        return (
            <main>
                <h2 className="error-heading">{`404: Topic "${topicQuery}" not found.`}</h2>
            </main>
        )

    return (
        <main>
            <h2>{topicQuery[0].toUpperCase() + topicQuery.slice(1)}</h2>
            <SortByDropdown
                sortBy={sortBy}
                setSortBy={setSortBy}
                order={order}
                setOrder={setOrder}
            />
            <ArticleStack
                page={page}
                topic={topicQuery}
                sortBy={sortBy}
                order={order}
                setTopicExists={setTopicExists}
            />
            <NextPageButton page={page} setPage={setPage} />
        </main>
    )
}

export default Articles
