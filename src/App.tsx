import { LatLng } from 'leaflet';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './styles/App.css';
import 'leaflet/dist/leaflet.css';

const position = new LatLng(38.72311671577611, 141.0346841825174);
const zoomlabel = 18
function App() {
  return (
    <div className="App">
      <MapContainer center={position} zoom={zoomlabel} doubleClickZoom={false} >
        <TileLayer
            attribution='&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a> contributors'
            url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
            maxZoom={21}
            maxNativeZoom={18}
        />
      </MapContainer>
    </div>
  );
}

export default App;
