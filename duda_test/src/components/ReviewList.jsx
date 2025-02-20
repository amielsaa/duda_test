import { useReviews } from "../services/providers/ReviewContext";
import { useState } from "react";
import AddEditReviewBox from "./AddEditReviewBox";
import Review from "./Review";
import "../css/ReviewList.css";

function ReviewList() {

    const { reviews, deleteReview, editReview, editingId, setEditingId } = useReviews();
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div className="reviews-list-container">
            {reviews && reviews.map((review) => (
                editingId && editingId === review.id ? (
                    <AddEditReviewBox mode="edit" />
                ) : (
                    <Review review={review} setHoveredId={setHoveredId} hoveredId={hoveredId} />
                )
            ))}
        </div>
    );
}

export default ReviewList;