import "./home.css"
import { Link } from "react-router"
import { user } from "../../../config"

function Home() {
    const introTitle = "Welcome to Anew"
    const introText =
        "An imaginary news site built by Patrick Evans to demonstrate frontend functionality."

    return (
        <main className="home">
            <h2>{introTitle}</h2>
            <p>{introText}</p>
            <h3>Explore</h3>
            <Link to={`/articles`}>
                <section className="home-card">
                    <p className="topic-slug">Articles</p>
                    <p className="topic-description">The News!</p>
                </section>
            </Link>
            <Link to={`/topics`}>
                <section className="home-card">
                    <p className="topic-slug">Topics</p>
                    <p className="topic-description">
                        What do you want to see?
                    </p>
                </section>
            </Link>
            <Link to={`/users?name=${user}`}>
                <section className="home-card">
                    <p className="topic-slug">User</p>
                    <p className="topic-description">Your own area.</p>
                </section>
            </Link>
        </main>
    )
}

export default Home
