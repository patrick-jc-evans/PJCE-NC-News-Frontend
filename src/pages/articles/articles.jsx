import { useState } from "react"
import NextPageButton from "../../components/buttons/nextPageButton"
import ArticleStack from "../../components/cards/articleStack"
import "./articles.css"
import axios from "axios"

function Articles() {
    const [page, setPage] = useState(1)

    console.log(page)

    return (
        <main>
            <h2>All Articles</h2>
            <ArticleStack page={page} />
            <NextPageButton page={page} setPage={setPage} />
        </main>
    )
}

export default Articles
