import { Link } from "react-router"

function Footer() {
    return (
        <footer>
            <Link to="/articles">
                <p>articles</p>
            </Link>
            <Link to="/users" />
            <Link to="/topics" />
        </footer>
    )
}

export default Footer
