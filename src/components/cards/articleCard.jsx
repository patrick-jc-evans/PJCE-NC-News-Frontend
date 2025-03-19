import { Link } from "react-router"
import placeholder from "../../icons/anew.svg"

function ArticleCard({ article_id, image, main, secondary, tertiary }) {
    return (
        <Link to={`/article?id=${article_id}`}>
            <section className="basic-card">
                <img className="bc-image" src={image ? image : placeholder} />
                <p className="bc-main-text">{main}</p>
                <p className="bc-secondary-text">{secondary}</p>
                <p className="bc-tertiary-text">{tertiary}</p>
            </section>
        </Link>
    )
}

export default ArticleCard
