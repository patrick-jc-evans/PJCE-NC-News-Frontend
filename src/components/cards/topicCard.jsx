import { Link } from "react-router"

function TopicCard({ slug, description }) {
    return (
        <Link to={`/articles?topic=${slug}`}>
            <section>
                <p>{slug}</p>
                <p>{description}</p>
            </section>
        </Link>
    )
}

export default TopicCard
