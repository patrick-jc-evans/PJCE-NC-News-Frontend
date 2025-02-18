import { useState } from "react"
import NextPageButton from "../../components/buttons/nextPageButton"
import ArticleStack from "../../components/cards/articleStack"
import "./articles.css"

function Articles() {
    const [page, setPage] = useState(1)

    return (
        <main>
            <h2>All Articles</h2>
            <ArticleStack page={page} />
            <NextPageButton page={page} setPage={setPage} />
        </main>
    )
}

export default Articles
