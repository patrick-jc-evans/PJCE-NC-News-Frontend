import "./App.css"
import { Routes, Route } from "react-router"

import Header from "./components/header"
import Footer from "./components/footer"

import Articles from "./pages/articles/articles"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<p>home</p>} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/topics" element={<p>topics</p>} />
                <Route path="/users" element={<p>users</p>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
