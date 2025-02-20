import React, { createContext, useContext, useEffect, useState } from "react";
import imgGen from "@dudadev/random-img";

const ReviewContext = createContext();

export const useReviews = () => useContext(ReviewContext);

export const ReviewProvider = ({ children }) => {


    const [reviews, setReviews] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [avatars, setAvatars] = useState(null);

    // update reviews on page load
    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        const storedAvatars = JSON.parse(localStorage.getItem("avatars")) || [];

        setReviews(storedReviews);
        setAvatars(storedAvatars);
    }, []);

    // update reviews on change
    useEffect(() => {
        if(reviews)
            localStorage.setItem("reviews", JSON.stringify(reviews));
        if(avatars)
            localStorage.setItem("avatars", JSON.stringify(avatars));
    }, [reviews, avatars]);

    const addReview = async (username, comment) => {
        if (!username.trim() || !comment.trim()) 
            return alert("Both fields are required.");
        
        let avatarUrl = avatars[username];

        if (!avatarUrl) {
            avatarUrl = await imgGen();
            console.log(avatarUrl)
            setAvatars((prev) => ({ ...prev, [username]: avatarUrl }));
        }            
        const newReview = { id: Date.now(), username, comment, avatar: avatarUrl };
        setReviews([...reviews, newReview]);
    };

    const editReview = (id, updatedComment) => {
        if (!updatedComment.trim()) 
            return alert("Both fields are required.");
        setReviews(reviews.map( review => 
            review.id === id ? { ...review, comment: updatedComment } : review
        ));
        setEditingId(null);
    };

    const deleteReview = (id) => {
        setReviews(reviews.filter( review => review.id !== id ));
    };

    return (
        <ReviewContext.Provider value={{ reviews, addReview, editReview, deleteReview, editingId, setEditingId }}>
            {children}
        </ReviewContext.Provider>
    );
};
