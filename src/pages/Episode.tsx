import React, { useEffect, useState } from "react";
import { getAllEpisodes } from "../api/rickAndMortyAPI";
import EpisodeList from '../components/EpisodeList';

interface Episode {
    id: number;
    name: string;
    air_date: string;
  }

const Episode: React.FC = () => {
    const [episodes, setEpisode] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      const data = await getAllEpisodes();
      setEpisode(data);
};

fetchEpisode();
  }, []);

  return (
    <div>
      <h1>Episodios</h1>
      <EpisodeList episodes={episodes} />
    </div>
  );
};

export default Episode;