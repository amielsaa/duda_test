import { useReviews } from "../services/providers/ReviewContext";
import "../css/Review.css";

function Review({ review, setHoveredId, hoveredId }) {

    const {setEditingId, deleteReview } = useReviews();

    return (
        <div
            key={review.id}
            className="review"
            onMouseEnter={() => setHoveredId(review.id)}
            onMouseLeave={() => setHoveredId(null)} 
            >
            <img src={review.avatar} alt="avatar" className="avatar" />
            <div className="content">
                <h4>{review.username}</h4>
                <p>{review.comment}</p>
            </div>
            {hoveredId === review.id && (
                <div className="actions">
                    <button onClick={() => setEditingId(review.id)}>✏️</button>
                    <button onClick={() => deleteReview(review.id)}>🗑️</button>
                </div>
            )}
        </div> 
    );
}

export default Review;