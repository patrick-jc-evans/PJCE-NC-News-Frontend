import { useState } from "react"
import { apiAddress } from "../../../config"
import axios from "axios"

function VoteButtons({ id, votes }) {
    const [displayedVotes, setDisplayedVotes] = useState(votes)

    function patchVotes(voteChange) {
        const url = `${apiAddress}/articles/${id}`
        console.log(url)
        setDisplayedVotes(displayedVotes + voteChange)
        axios.patch(url, { inc_votes: voteChange })
    }

    return (
        <section className="article-buttons-section">
            <button
                onClick={() => {
                    patchVotes(1)
                }}
            >
                Like
            </button>
            <p>{displayedVotes}</p>
            <button
                onClick={() => {
                    patchVotes(-1)
                }}
            >
                Dislike
            </button>
        </section>
    )
}

export default VoteButtons
