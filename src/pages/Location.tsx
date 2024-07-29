import React, { useEffect, useState } from "react";
import { getAllLocations } from "../api/rickAndMortyAPI";
import LocationList from '../components/LocationList';

interface Location {
    id: number;
    name: string;
}

const Location: React.FC = () => {
    const [locations, setlocation] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocation = async () => {
      const data = await getAllLocations();
      setlocation(data);
};

fetchLocation();
  }, []);

  return (
    <div>
      <h1>Localização</h1>
      <LocationList locations={locations} />
    </div>
  );
};

export default Location;
