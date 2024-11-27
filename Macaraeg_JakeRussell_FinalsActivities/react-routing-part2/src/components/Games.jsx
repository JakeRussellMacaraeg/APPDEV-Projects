import { Link } from 'react-router-dom';

const games = [
  {
    id: 1,
    name: 'Team Fight Tactics',
    description: 'A strategic auto-battler!',
    image: 'https://content.tacter.com/public/profiles/9Lo9A3YmYYVjrpfMUl46CuGi4452/picture-1715862223902.jpg',
    reviews: [
      { user: 'Zhuan', text: 'Great game, love the strategy!', rating: 5 },
      { user: 'Patrick', text: 'Fun but can be repetitive.', rating: 3 },
      { user: 'Ralph', text: 'Really fun, especially with friends!', rating: 4 },
      { user: 'Nikos', text: 'I enjoy the strategic depth.', rating: 5 },
      { user: 'Arvin', text: 'Challenging and fun gameplay.', rating: 4 }
    ]
  },
  {
    id: 2,
    name: 'God Of War (2018)',
    description: 'An action-packed game with a gripping story.',
    image: 'https://www.gamereactor.no/media/81/godwar_2428143.jpg',
    reviews: [
      { user: 'Zhuan', text: 'Epic gameplay and story.', rating: 5 },
      { user: 'Patrick', text: 'Good game, but some puzzles are too easy.', rating: 4 },
      { user: 'Ralph', text: 'Amazing visuals, fantastic combat!', rating: 5 },
      { user: 'Nikos', text: 'One of the best action games.', rating: 5 },
      { user: 'Arvin', text: 'The story and combat are top-notch.', rating: 4 }
    ]
  },
  {
    id: 3,
    name: 'Elden Ring',
    description: 'A challenging RPG with stunning visuals.',
    image: 'https://i.ytimg.com/vi/E3Huy2cdih0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCjYCK2CLZJh9xSP9M5Nx-iOIVAyA',
    reviews: [
      { user: 'Zhuan', text: 'Beautiful visuals, but very challenging.', rating: 4 },
      { user: 'Patrick', text: 'A tough game, but rewarding!', rating: 5 },
      { user: 'Ralph', text: 'I struggled a lot, but it’s worth it.', rating: 4 },
      { user: 'Nikos', text: 'Fantastic graphics and story, tough gameplay.', rating: 5 },
      { user: 'Arvin', text: 'Great game, though a bit too hard for casual players.', rating: 3 }
    ]
  },
  {
    id: 4,
    name: 'Honkai Star Rail',
    description: 'A unique turn-based RPG with engaging gameplay.',
    image: 'https://vulcanpost.com/wp-content/uploads/2023/04/honkai-star-rail-gameplay-early-review-014.jpg',
    reviews: [
      { user: 'Zhuan', text: 'An engaging RPG, with great mechanics.', rating: 5 },
      { user: 'Patrick', text: 'The gameplay is good, but the story needs work.', rating: 3 },
      { user: 'Ralph', text: 'Nice turn-based combat mechanics.', rating: 4 },
      { user: 'Nikos', text: 'Unique RPG with fun battles.', rating: 5 },
      { user: 'Arvin', text: 'Great story but a bit slow at times.', rating: 4 }
    ]
  },
  {
    id: 5,
    name: 'Grand Theft Auto 6',
    description: 'The most anticipated game of all time.',
    image: 'https://i.pinimg.com/736x/77/a9/0d/77a90d21a190f84a5bc98163fc367e3c.jpg',
    reviews: [
      { user: 'Zhuan', text: 'Excited for its release, looks amazing!', rating: 5 },
      { user: 'Patrick', text: 'Im So Hyped!', rating: 4 },
      { user: 'Ralph', text: 'Looks fantastic, can’t wait to play.', rating: 5 },
      { user: 'Nikos', text: 'Can’t wait for it!', rating: 5 },
      { user: 'Arvin', text: 'Definitely a game I’m looking forward to!', rating: 4 }
    ]
  }
];

export default function Games() {
  return (
    <>
      <h1>Games List</h1>
      <div className="games-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} className="game-image" />
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <Link to={`/games/${game.id}`} state={{ game }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
