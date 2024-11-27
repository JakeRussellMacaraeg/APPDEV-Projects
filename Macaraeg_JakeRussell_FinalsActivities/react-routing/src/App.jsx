import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Games from './components/Games';
import Game from './components/Game';
import NotFound from './components/NotFound';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>
      {/* Routes for the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games">
          {}
          <Route index element = {<Games />} />
          <Route path=":gameId" element = {<Game />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
