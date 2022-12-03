import * as React from 'react';
import { useState, useEffect } from 'react';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import Navbar from './components/navbar.js';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {

   const [coordinates, setCoordinates] = useState([{ long:-0.481747846041145 , lat:51.3233379650232 },{ long:-6.481747846041145 , lat:10.3233379650232 }]);
   useEffect(() => {
        //loadData();
    },[])

    async function loadData(){
       await fetch('https://api.estuary.tech/pinning/pins', {
      method: 'GET'
    }).then(data => {
        return data.json();
      }).then(data => {
        
        console.log(data);
      });
    }
  return (
    <div className="App">
      <Navbar/>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 16.62662018,
          latitude: 5.2125578,
          zoom: 3
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        //mapStyle="https://api.maptiler.com/maps/streets/style.json?key=9e5RrMp5jRDFlhPeumtR"
        mapStyle="https://api.maptiler.com/maps/hybrid/style.json?key=9e5RrMp5jRDFlhPeumtR"
      >
        <NavigationControl position="top-left" />
          {coordinates.map((element, index) => ( 
             <Marker longitude={coordinates[index].long} latitude={coordinates[index].lat} color='#61db00' /> 
    
    ) 
)}
        
      </Map>
    </div>
  );
}

export default App;
