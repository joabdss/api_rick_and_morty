import React from 'react';
import { Link } from 'react-router-dom';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

interface LocationListProps {
  locations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div className="list-css">
      {locations.map((location) => (
        <div key={location.id} className="container-css">
          <Link to={`/location/${location.id}`}>
            <h2>{location.name}</h2>
          </Link>
          <p><b>Tipo: </b>{location.type}</p>
          <p><b>Dimensão: </b>{location.dimension}</p>
        </div>
        
      ))}
      
    </div>
    
  );
};

export default LocationList;