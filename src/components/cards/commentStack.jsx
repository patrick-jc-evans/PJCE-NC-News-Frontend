import CommentCard from "./commentCard"
import "../components.css"

function CommentStack({ comments }) {
    return (
        <section className="comments-section">
            <h5 className="comment-title">Comments</h5>
            {comments.map((comment) => {
                return (
                    <CommentCard
                        key={comment[3]}
                        commentID={comment[3]}
                        author={comment[1]}
                        body={comment[2]}
                    ></CommentCard>
                )
            })}
        </section>
    )
}

export default CommentStack
