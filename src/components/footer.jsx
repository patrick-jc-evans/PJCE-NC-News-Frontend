import { Link } from "react-router"
import { user } from "../../config"

function Footer() {
    return (
        <footer>
            <Link to="/articles">
                <img
                    className="footer-icon"
                    alt="article icon"
                    src="../../src/icons/articles.svg"
                />
            </Link>
            <Link to="/topics">
                <img
                    className="footer-icon"
                    alt="topics icon"
                    src="../../src/icons/topics.svg"
                />
            </Link>
            <Link to={`/users?name=${user}`}>
                <img
                    className="footer-icon"
                    alt="user icon"
                    src="../../src/icons/users.svg"
                />
            </Link>
            <Link to="/">
                <img
                    className="footer-icon"
                    alt="home icon"
                    src="../../src/icons/home.svg"
                />
            </Link>
        </footer>
    )
}

export default Footer
