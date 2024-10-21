import React from 'react';
import './Navbar.css';

const Navbar = ({ filterByRegion, filterByType, handleSearch, searchTerm, onSearchButtonClick }) => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Pokédex</a> {/* Use href="/" for home navigation */}
      </div>
      <form className="search-form" onSubmit={(e) => { e.preventDefault(); onSearchButtonClick(); }}>
        <input
          type="text"
          className="search-input"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="dropdown-container">
        <div className="dropdown">
          <button className="dropbtn">Sort by Region</button>
          <div className="dropdown-content">
            <a onClick={() => filterByRegion('kanto')}>Kanto</a>
            <a onClick={() => filterByRegion('johto')}>Johto</a>
            <a onClick={() => filterByRegion('hoenn')}>Hoenn</a>
            <a onClick={() => filterByRegion('sinnoh')}>Sinnoh</a>
            <a onClick={() => filterByRegion('unova')}>Unova</a>
            <a onClick={() => filterByRegion('kalos')}>Kalos</a>
            <a onClick={() => filterByRegion('alola')}>Alola</a>
            <a onClick={() => filterByRegion('galar')}>Galar</a>
            <a onClick={() => filterByRegion('hisui')}>Hisui</a>
            <a onClick={() => filterByRegion('paldea')}>Paldea</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Sort by Type</button>
          <div className="dropdown-content">
          <a onClick={() => filterByType('normal')}>Normal</a>
            <a onClick={() => filterByType('fire')}>Fire</a>
            <a onClick={() => filterByType('water')}>Water</a>
            <a onClick={() => filterByType('grass')}>Grass</a>
            <a onClick={() => filterByType('electric')}>Electric</a>
            <a onClick={() => filterByType('ice')}>Ice</a>
            <a onClick={() => filterByType('dragon')}>Dragon</a>
            <a onClick={() => filterByType('fighting')}>Fighting</a>
            <a onClick={() => filterByType('poison')}>Poison</a>
            <a onClick={() => filterByType('ground')}>Ground</a>
            <a onClick={() => filterByType('flying')}>Flying</a>
            <a onClick={() => filterByType('psychic')}>Psychic</a>
            <a onClick={() => filterByType('bug')}>Bug</a>
            <a onClick={() => filterByType('rock')}>Rock</a>
            <a onClick={() => filterByType('ghost')}>Ghost</a>
            <a onClick={() => filterByType('dark')}>Dark</a>
            <a onClick={() => filterByType('steel')}>Steel</a>
            <a onClick={() => filterByType('fairy')}>Fairy</a>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;