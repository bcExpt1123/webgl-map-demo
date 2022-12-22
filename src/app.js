import { useEffect } from 'react';
import './App.css';
import WebGLMap from './webgl-map-lib/src';

function App() {
  useEffect(() => {
    const map = new WebGLMap({
      id: 'myCanvasId',
      tileServerURL: 'https://maps.ckochis.com/data/v3/{z}/{x}/{y}.pbf',
      width: 800,
      height: 600,
      center: [-73.9834558, 40.6932723],
      minZoom: 4,
      maxZoom: 18,
      zoom: 13,
      debug: true,
      layers: {
        water: [180, 240, 250, 255],
        landcover: [202, 246, 193, 255],
        park: [202, 255, 193, 255],
        building: [185, 175, 139, 191],
      }
    });
    console.log(map)
  })
  return (
    <div id="__webgl_map_demo"></div>
  );
}

export default App;
