import { useState } from "react"
import { apiAddress } from "../../../config"
import axios from "axios"

function VoteButtons({ id, votes }) {
    const [displayedVotes, setDisplayedVotes] = useState(votes)
    const [likeButtonClicked, setLikeButtonClicked] = useState(false)
    const [dislikeButtonClicked, setDislikeButtonClicked] = useState(false)
    const [serverError, setServerError] = useState(false)

    function patchVotes(voteChange) {
        const url = `${apiAddress}/articles/${id}`
        setDisplayedVotes(displayedVotes + voteChange)
        axios.patch(url, { inc_votes: voteChange }).catch(() => {
            setServerError(true)
        })
    }

    function displayServerError() {
        return serverError ? "Server Error - Vote not counted" : ""
    }

    let onScreenVotes
    if (displayedVotes > 0) {
        onScreenVotes = "+" + displayedVotes
    } else {
        onScreenVotes = displayedVotes
    }

    return (
        <>
            <section className="article-buttons-section">
                <button
                    className={"vote-button-" + likeButtonClicked}
                    onClick={() => {
                        if (!likeButtonClicked && !dislikeButtonClicked) {
                            patchVotes(1)
                            setLikeButtonClicked(true)
                        } else if (!likeButtonClicked && dislikeButtonClicked) {
                            patchVotes(+2)
                            setLikeButtonClicked(true)
                            setDislikeButtonClicked(false)
                        } else {
                            patchVotes(-1)
                            setLikeButtonClicked(false)
                        }
                    }}
                >
                    Like
                </button>
                <p className="vote-counts">{onScreenVotes}</p>
                <button
                    className={"vote-button-" + dislikeButtonClicked}
                    onClick={() => {
                        if (!likeButtonClicked && !dislikeButtonClicked) {
                            patchVotes(-1)
                            setDislikeButtonClicked(true)
                        } else if (likeButtonClicked && !dislikeButtonClicked) {
                            patchVotes(-2)
                            setDislikeButtonClicked(true)
                            setLikeButtonClicked(false)
                        } else {
                            patchVotes(+1)
                            setDislikeButtonClicked(false)
                        }
                    }}
                >
                    Dislike
                </button>
            </section>
            <p className="error">{displayServerError()}</p>
        </>
    )
}

export default VoteButtons
