import "./components.css"
import { Link } from "react-router"

function Header() {
    return (
        <header>
            <Link to="/">
                <h1 className="site-name">ANEW.</h1>
            </Link>
        </header>
    )
}

export default Header
