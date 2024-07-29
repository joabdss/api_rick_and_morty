import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCharacterById } from '../api/rickAndMortyAPI';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  image: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  gender: string;
  origin: Origin;
  location: Location;
}


interface Location {
  name: string;
}

interface Origin {
  name: string
}

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Fetching character with id:', id);
    const fetchCharacter = async () => {
      try {
        if (id) {
          const data = await getCharacterById(id);
          console.log('Fetched character data:', data);
          setCharacter(data);
        }
      } catch (error) {
        setError('Failed to fetch character details');
        console.error('Error fetching character details:', error);
      } finally {
        setLoading(false);
      }
    };


    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div>Carregando..</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!character) {
    return <div>No existe</div>;
  }

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
    <div className="details">
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="info">
        <h2 className="h2-card-detail">{character.name}</h2>
        <p
         className="character-status"><strong>Status: </strong> 
          <b><span style={{ color: getStatusColor(character.status) }}>{character.status}</span></b>
        </p>
        <p className="character-species"><strong>Espécie:</strong> {character.species}</p>
        <p className="character-gender"><strong>Gênero:</strong> {character.gender}</p>
        <p className="character-location"><strong>Localização:</strong> {character.location.name}</p>
        <p className="character-origin"><strong>Origem:</strong> {character.origin.name}</p>
        <Link to={`/characters`} className="back-button">Voltar</Link>
      </div>
    </div>
  );
};

export default CharacterDetail;