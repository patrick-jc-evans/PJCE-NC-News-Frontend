import TopicCard from "./topicCard"
import axios from "axios"
import { apiAddress } from "../../../config"
import { useEffect, useState } from "react"

function TopicStack() {
    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState(true)

    function getTopics() {
        axios.get(`${apiAddress}/topics`).then((response) => {
            const fullTopicData = response.data.topics

            const cardData = []
            fullTopicData.forEach((topic) => {
                cardData.push([topic.slug, topic.description])
            })

            setTopics(cardData)
            setLoading(false)
        })
    }

    useEffect(() => {
        getTopics()
    }, [])

    if (loading) {
        return (
            <p className="loading-text">
                Page Loading. This may take a while due to the api server
                spinning up.
            </p>
        )
    }

    return (
        <>
            {topics.map((topic, index) => {
                return (
                    <TopicCard
                        key={index}
                        slug={topic[0]}
                        description={topic[1]}
                    />
                )
            })}
        </>
    )
}

export default TopicStack
