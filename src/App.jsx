import "./App.css"
import { Routes, Route } from "react-router"

import Header from "./components/header"
import Footer from "./components/footer"

import Articles from "./pages/articles/articles"
import Article from "./pages/article/article"
import Topics from "./pages/topics/topics"
import ErrorPage from "./pages/errorPage/errorPage"
import Home from "./pages/home/home"
import Users from "./pages/users/users"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/users" element={<Users />} />
                <Route path="/article" element={<Article />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
