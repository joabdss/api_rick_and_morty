import React from 'react';
import { Link } from 'react-router-dom';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

interface EpisodeListProps {
  episodes: Episode[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  return (
    <div className="list-css">
      {episodes.map((episode) => (
        <div key={episode.id} className="container-css">
          <Link to={`/episodes/${episode.id}`}>
          <h2 className="episode-title">{episode.name}</h2>
          </Link>
          <div>
            <p><b>Data de lançamento: </b> {episode.air_date}</p>
            <p><b>Episódio: </b> {episode.episode}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;