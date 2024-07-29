import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getEpisodeById } from '../api/rickAndMortyAPI';
import axios from 'axios';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [];
}

interface Character {
  id: number;
  name: string;
  image: string;
}


const EpisodeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisodeDetail = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
        setEpisode(response.data);
        const characterResponses = await Promise.all(response.data.characters.map((url: string) => axios.get(url)));
        setCharacters(characterResponses.map(response => response.data));
        setLoading(false);
      } catch (error) {
        setError('Error fetching episode details');
        setLoading(false);
      }
    };

    fetchEpisodeDetail();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!episode) {
    return <div>Não existe</div>;
  }




  return (
    <div className='details'>
      <div className='info'>
      <h2 className='h2-card-detail'>{episode.name}</h2>
      <p className='episode-air_date'><b>Data de lançamento:</b> {episode.air_date}</p>
      <p className='episode-episode'><b>Episódio:</b> {episode.episode} </p>
      <h2 className='h2-card-detail'>Personagens incluidos no episódio:</h2>
      <ul className="characters-list">
        {characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} className="character-image" />
            <p className='episode-episode'><b>{character.name}</b></p>
          </li>
        ))}
      </ul>
      <Link to={`/episodes`} className="back-button">Voltar</Link>
      </div>
    </div>
  );
};

export default EpisodeDetail;