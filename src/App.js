import { Map, Marker } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

import locations from "./locations";


function App() {
  return (
    <Map 
      height={800} 
      width={800} 
      provider={stamenToner}
      defaultCenter={[39.0997, -94.5786]} 
      defaultZoom={10}
    >
      {locations.map((loc, key) => (
        <Marker
          key={key}
          width={5}
          anchor={[loc.lon, loc.lat]} 
        />
      ))}
      
    </Map>
  )
};

export default App;
