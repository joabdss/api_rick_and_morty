import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: 'Alive' | 'Dead' | 'unknown';
  location: Location;

}

interface Location {
  name:string;
}

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {

  const getStatusColor = (status: 'Alive' | 'Dead' | 'unknown'): string => {
    switch (status) {
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      case 'unknown':
      default:
        return 'gray';
    }
  };

  return (
      <div className='grid-container'>
        {characters.map((character) => (
          <div key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <img className='img-edit' src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
            </Link>
              <div className='divespecie'> 
                <p>{character.species}</p>
                <p>
                  <b>Status: <i><span style={{ color: getStatusColor(character.status) }}>{character.status}</span></i></b>
                </p>
                <p><b>{character.location.name}</b></p>
              </div>
          </div>
        ))}
      </div>
  );
};

export default CharacterList;