import './index.css';
import reportWebVitals from './reportWebVitals';
import WebGLMap from './webgl-map-lib';

const map = new WebGLMap({
  id: '__webgl_map_demo',
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
