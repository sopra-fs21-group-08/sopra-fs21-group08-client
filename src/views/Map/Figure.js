import L from 'leaflet';
import figure from '../../assets/img/figures/figure_turquoise.svg'

const iconPerson = new L.Icon({
    iconUrl: figure,
    iconRetinaUrl: figure,
    iconAnchor: [30,65],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-marker-icon'
});

export { iconPerson };