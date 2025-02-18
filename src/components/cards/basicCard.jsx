import { Link } from "react-router"

function BasicCard({ article_id, main, secondary }) {
    return (
        <Link to={`/article?id=${article_id}`}>
            <section className="basic-card">
                <p className="bc-main-text">{main}</p>
                <p className="bc-secondary-text">{secondary}</p>
            </section>
        </Link>
    )
}

export default BasicCard
