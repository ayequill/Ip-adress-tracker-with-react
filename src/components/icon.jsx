import L from 'leaflet';
import Icon from '../assets/icon-location.svg';

const icon = L.icon({
  iconUrl: Icon,
  iconSize: [30, 40],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

export default icon;
