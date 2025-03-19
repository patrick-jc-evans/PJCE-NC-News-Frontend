import { Link } from "react-router"
import { user } from "../../config"
import articleIcon from "../icons/articles.svg"
import topicsIcon from "../icons/topics.svg"
import usersIcon from "../icons/users.svg"
import homeIcon from "../icons/home.svg"

function Footer() {
    return (
        <footer>
            <Link to="/articles">
                <img
                    className="footer-icon"
                    alt="article icon"
                    src={articleIcon}
                />
            </Link>
            <Link to="/topics">
                <img
                    className="footer-icon"
                    alt="topics icon"
                    src={topicsIcon}
                />
            </Link>
            <Link to={`/users?name=${user}`}>
                <img className="footer-icon" alt="user icon" src={usersIcon} />
            </Link>
            <Link to="/">
                <img className="footer-icon" alt="home icon" src={homeIcon} />
            </Link>
        </footer>
    )
}

export default Footer
