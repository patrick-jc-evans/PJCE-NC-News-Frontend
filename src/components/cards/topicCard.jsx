import { Link } from "react-router"

function TopicCard({ slug, description }) {
    return (
        <Link>
            <section>
                <p>{slug}</p>
                <p>{description}</p>
            </section>
        </Link>
    )
}

export default TopicCard
