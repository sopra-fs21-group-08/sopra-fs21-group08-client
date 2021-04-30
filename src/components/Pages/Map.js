import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import L, { bounds } from 'leaflet';
import { MapContainer, SVGOverlay, WMSTileLayer, Circle, Marker, Polyline, AttributionControl } from 'react-leaflet'
import { figureTurquoise, figureBlack, figureBlue, figureRed, figureWhite, figureYellow } from '../../views/Map/Figure'
import StationMarker from '../../views/Map/StationMarker'
import routes from '../../assets/mockstations/routes'
function GameMap(props) {

    const [rts, setRts] = useState(routes)
    const [stations, setStations] = useState(props.stations)
    const [figPos, setFigPos] = useState({})
    const [players, setPlayers] = useState([])
    const [gameStatus, setGameStatus] = useState(props.gameStatus)
    const figures = [figureTurquoise, figureBlack, figureBlue, figureRed, figureWhite, figureYellow]

    const changePosition = (station) => {
        setFigPos(station)

    }
    useEffect(() => {
        setFigPos({
            "stop_lat": 47.3668727813338,
            "stop_lon": 8.54533193921056
        })
    }, [])

    useEffect(() => {
        var formattedPlayers = [];
        var id = null;
        var position = null;
        var figure = null;
        props.players.forEach((player, idx) => {
            id = player.user.userId;
            figure = figures[idx];
            position = props.stations.find(station => station.id===player.stationId)
            formattedPlayers.push({id: id, figure: figure, position: [position.stop_lat, position.stop_lon]})
            
        })
        setPlayers(formattedPlayers)

    }, [props.players, props.stations])



    return (
        <MapContainer center={[47.367270, 8.534655]} attributionControl={false} transparent={true} zoom={13} style={{ height: "100vh" }} scrollWheelZoom={true}>
            <WMSTileLayer
                layers={["ortho_s"]}
                format="image/png"
                transparent={true}
                url="https://wms.zh.ch/OrthoZHWMS"
            />
            <div>
                {props.stations.map((station) =>
                    <StationMarker onClickStation={changePosition} key={station.id} station={station} number={station.id} bounds={[station.stop_lat, station.stop_lon]}></StationMarker>
                )}</div>
            {players.map((player) => <Marker key={player.id}
                position={player.position}
                icon={player.figure}
            >
            </Marker>)}


            {Object.keys(rts).map((route, index) => <Polyline key={index} pathOptions={{ color: rts[route].color }} positions={routes[route].positions} />)}
        </MapContainer>
    )
}

export default GameMap
