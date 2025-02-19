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

    let onScreenVotes
    if (displayedVotes > 0) {
        onScreenVotes = "+" + displayedVotes
    } else {
        onScreenVotes = displayedVotes
    }

    return (
        <section className="article-buttons-section">
            <button
                className="vote-button"
                onClick={() => {
                    patchVotes(1)
                }}
            >
                Like
            </button>
            <p className="vote-counts">{onScreenVotes}</p>
            <button
                className="vote-button"
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
