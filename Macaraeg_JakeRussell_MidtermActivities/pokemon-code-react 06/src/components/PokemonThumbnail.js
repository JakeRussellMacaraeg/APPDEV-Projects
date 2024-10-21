import React from 'react';


const PokemonThumbnail = ({ id, name, stats, image, type, ability, firstType }) => {
    return (
        <div className={`thumb-container ${firstType}`}> {/* Use firstType for color */}
            <div className="number">#{id}</div>
            <img src={image} alt={name} />
            <h3 className="pokemon-name">{name}</h3>
            <div className="pokemon-info">
                <div className="info-item"><span className="info-label">Type:</span> {type}</div> {/* Display all types */}
                <div className="info-item"><span className="info-label">Ability:</span> {ability}</div>
                <div className="info-item"><span className="info-label">Base Stat:</span> {stats}</div>
            </div>
        </div>
    );
};
export default PokemonThumbnail;