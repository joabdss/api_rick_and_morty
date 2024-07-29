import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom';
import { getLocationById } from '../api/rickAndMortyAPI';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

const LocationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [location, setlocation] = useState<Location | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocationDetail = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
        setlocation(response.data);
        const characterResponses = await Promise.all(response.data.residents.map((url: string) => axios.get(url)));
        setCharacters(characterResponses.map(response => response.data));
        setLoading(false);
      } catch (error) {
        setError('Error fetching location details');
        setLoading(false);
      }
    };

    fetchLocationDetail();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!location) {
    return <div>Não Existe</div>;
  }
  
  return (
    <div className="details">
      <div className="info">
        <h2 className="h2-card-detail">{location.name}</h2>
        <p className="location-type"><strong>Tipo:</strong> {location.type}</p>
        <p className="location-dimension"><strong>Dimensão:</strong> {location.dimension}</p>
        <h2 className='h2-card-detail'>Personagens residentes:</h2>
        <ul className="characters-list">
        {characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} className="character-image" />
            <p className='episode-episode'>{character.name}</p>
          </li>
        ))}
      </ul>
        <Link to={`/location`} className="back-button">Voltar</Link>
      </div>
    </div>
  );
};

export default LocationDetail;