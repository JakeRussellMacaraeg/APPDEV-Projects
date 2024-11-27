import { useLocation } from 'react-router-dom';

export default function Game() {
  const location = useLocation();
  const game = location.state.game;

  const limitedReviews = game.reviews.slice(0, 5);

  return (
    <div className="game-details-container">
      <div className="game-details">
        <h1>{game.name}</h1>
        <div className="game-image-container">
          <img src={game.image} alt={game.name} className="game-image" />
        </div>
        <p>{game.description}</p>

        <div className="reviews-section">
          <h2>User Reviews</h2>
          <div className="reviews-list">
            {limitedReviews.map((review, index) => (
              <div key={index} className="review-card">
                <h3>{review.user}</h3>
                <p>{review.text}</p>
                <p><strong>Rating: {review.rating} / 5</strong></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
