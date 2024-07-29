import axios from "axios";

const rickAndMortyAPI = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
});

export const getAllCharacters = async () => {
    const response = await rickAndMortyAPI.get('/character');
    return response.data.results;
};

export const getCharacterById = async (id: string) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };



export const getAllLocations = async () => {
    const response = await rickAndMortyAPI.get('/location');
    return response.data.results;
};

export const getLocationById = async (id: string) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
};


export const getAllEpisodes = async () => {
    try {
      const response = await rickAndMortyAPI.get('/episode');
      console.log(response.data); 
      return response.data.results; 
    } catch (error) {
      console.error('Erro ao obter episódios:', error);
      return [];
    }
};

export const getEpisodeById = async (id: string) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
};