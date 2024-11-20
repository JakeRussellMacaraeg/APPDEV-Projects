import React, { useState } from 'react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [gameTitle, setGameTitle] = useState("");
    const [review, setReview] = useState("");

    const handleGameTitleChange = (e) => setGameTitle(e.target.value);
    const handleReviewChange = (e) => setReview(e.target.value);

    const addReview = () => {
        const newReview = {
            gameTitle,
            review,
            date: new Date().toLocaleDateString(),
        };
        setReviews([...reviews, newReview]);
        setGameTitle("");
        setReview("");
    };

    return (
        <div className="reviews-container">
            <h2>Add a Game Review</h2>
            <input 
                type="text" 
                placeholder="Game Title" 
                value={gameTitle} 
                onChange={handleGameTitleChange} 
            />
            <br />
            <textarea 
                placeholder="Write your review here" 
                value={review} 
                onChange={handleReviewChange}
            ></textarea>
            <br />
            <button onClick={addReview}>Add Review</button>
            <h3><center>- - - Reviews: - - -</center></h3>
            <ul>
                {reviews.map((r, index) => (
                    <li key={index}>
                        <strong>{r.gameTitle}</strong> - {r.review} <em>({r.date})</em>
                    </li>
                ))}
            </ul>
        </div>
    );
}
