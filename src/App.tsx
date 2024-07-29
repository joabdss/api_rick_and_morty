import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import Location from './pages/Location';
import Episode from './pages/Episode';
import Layout from './components/Layout';
import CharacterDetail from './pages/CharacterDetail';
import LocationDetail from './pages/LocationDetail';
import EpisodeDetail from './pages/EpisodeDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />

        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<CharacterDetail />} />

        <Route path="location" element={<Location />} />
        <Route path="location/:id" element={<LocationDetail />} />

        <Route path="episodes" element={<Episode />} />
        <Route path="episodes/:id" element={<EpisodeDetail />} />
        
      </Route>
    </Routes>
  );
};

export default App;