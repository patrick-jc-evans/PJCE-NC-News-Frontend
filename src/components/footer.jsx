import { Link } from "react-router"
import { user } from "../../config"

function Footer() {
    return (
        <footer>
            <Link to="/articles">
                <img
                    className="footer-icon"
                    alt="article icon"
                    src="../../public/icons/articles.svg"
                />
            </Link>
            <Link to="/topics">
                <img
                    className="footer-icon"
                    alt="article icon"
                    src="../../public/icons/topics.svg"
                />
            </Link>
            <Link to={`/users?name=${user}`}>
                <img
                    className="footer-icon"
                    alt="article icon"
                    src="../../public/icons/users.svg"
                />
            </Link>
            <Link to="/">
                <img
                    className="footer-icon"
                    alt="article icon"
                    src="../../public/icons/home.svg"
                />
            </Link>
        </footer>
    )
}

export default Footer
