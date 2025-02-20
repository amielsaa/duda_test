import { useState } from "react";
import { useReviews } from "../services/providers/ReviewContext";
import "../css/AddEditReviewBox.css";

function AddEditReviewBox({ mode }) {
    const { addReview, editReview, editingId, setEditingId } = useReviews();
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === "edit") {
          editReview(editingId, comment);
        } else {
          addReview(username, comment);
        }
        setUsername("");
        setComment("");
        setEditingId(null);
      };

    return (
        <form className="add-edit-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Your name" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <textarea 
                placeholder="Your comment" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
            />
            <button type="submit">{mode === "edit" ? "Save" : "Add"}</button>
        </form>
    );
}

export default AddEditReviewBox;