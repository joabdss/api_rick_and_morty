import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../api/rickAndMortyAPI";
import CharacterList from '../components/CharacterList';

interface Character {
    id: number;
    name: string;
    image: string;
}

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getAllCharacters();
      setCharacters(data);
};

fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Personagens</h1>
      <CharacterList characters={characters} />
    </div>
  );
};

export default Characters;