import { Link } from "react-router"

function TopicCard({ slug, description }) {
    return (
        <Link to={`/articles?topic=${slug}`}>
            <section className="topic-card">
                <p className="topic-slug">{slug.toUpperCase()}</p>
                <p className="topic-description">{description}</p>
            </section>
        </Link>
    )
}

export default TopicCard
