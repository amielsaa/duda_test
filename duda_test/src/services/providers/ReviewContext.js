import React, { createContext, useContext, useEffect, useState } from "react";

const ReviewContext = createContext();

export const useReviews = () => useContext(ReviewContext);

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);

    // update reviews on page load
    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        setReviews(storedReviews);
    }, []);

    // update reviews on change
    useEffect(() => {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);

    const addReview = (username, comment) => {
        if (!username.trim() || !comment.trim()) return alert("Both fields are required.");
        
        const newReview = { id: Date.now(), username, comment };
        setReviews([...reviews, newReview]);
    };

    const editReview = (id, updatedComment) => {
        setReviews(reviews.map(review => 
        review.id === id ? { ...review, comment: updatedComment } : review
        ));
    };

    const deleteReview = (id) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    return (
        <ReviewContext.Provider value={{ reviews, addReview, editReview, deleteReview }}>
            {children}
        </ReviewContext.Provider>
    );
}
