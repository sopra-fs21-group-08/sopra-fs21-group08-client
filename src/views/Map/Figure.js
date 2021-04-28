import L from 'leaflet';
import iconFigureTurquoise from '../../assets/img/figures/figure_turquoise.svg'
import iconFigureBlack from '../../assets/img/figures/figure_black.svg'
import iconFigureBlue from '../../assets/img/figures/figure_blue.svg'
import iconFigureRed from '../../assets/img/figures/figure_red.svg'
import iconFigureWhite from '../../assets/img/figures/figure_white.svg'
import iconFigureYellow from '../../assets/img/figures/figure_yellow.svg'

const figureTurquoise = new L.Icon({
    iconUrl: iconFigureTurquoise,
    iconRetinaUrl: iconFigureTurquoise,
    iconAnchor: [30,65],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-marker-icon'
});
const figureBlack = new L.Icon({
    iconUrl: iconFigureBlack,
    iconRetinaUrl: iconFigureBlack,
    iconAnchor: [30,65],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-marker-icon'
});
const figureBlue = new L.Icon({
    iconUrl: iconFigureBlue,
    iconRetinaUrl: iconFigureBlue,
    iconAnchor: [30,65],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-marker-icon'
});
const figureRed = new L.Icon({
    iconUrl: iconFigureRed,
    iconRetinaUrl: iconFigureRed,
    iconAnchor: [30,65],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-marker-icon'
});
const figureWhite = new L.Icon({
    iconUrl: iconFigureWhite,
    iconRetinaUrl: iconFigureWhite,
    iconAnchor: [30,65],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-marker-icon'
});
const figureYellow = new L.Icon({
    iconUrl: iconFigureYellow,
    iconRetinaUrl: iconFigureYellow,
    iconAnchor: [30,65],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-marker-icon'
});

export { figureTurquoise, figureBlack, figureBlue, figureRed, figureWhite, figureYellow };