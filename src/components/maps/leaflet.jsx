import "leaflet/dist/leaflet.css"
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

/*reference*/
// https://react-leaflet.js.org/docs/start-setup/
// https://codesandbox.io/s/react-leaflet-popup-not-showing-when-clicking-marker-2yqe9?file=/src/Leaflet.jsx

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

const position = [-6.919461626575115, 107.61946767752964]

function Main() {
  return (
    <div id="map" className="w-full h-full bg-red-500">
    <MapContainer 
    center={position} 
    zoom={13} 
    scrollWheelZoom={false} 
    style={{height: "100%", width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
      />
      <Marker
        icon={customMarker}
        position={position}
      >
        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default Main;
