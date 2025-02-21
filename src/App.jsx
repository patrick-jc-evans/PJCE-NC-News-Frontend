import "./App.css"
import { Routes, Route } from "react-router"

import Header from "./components/header"
import Footer from "./components/footer"

import Articles from "./pages/articles/articles"
import Article from "./pages/article/article"
import Topics from "./pages/topics/topics"
import ErrorPage from "./pages/errorPage/errorPage"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<p>home</p>} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/users" element={<p>users</p>} />
                <Route path="/article" element={<Article />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
