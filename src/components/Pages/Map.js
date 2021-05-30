import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Polyline, WMSTileLayer } from 'react-leaflet';
import routes from '../../assets/mockstations/routes';
import ChangeView from '../../views/Map/ChangeView';
import { figureBlack, figureBlue, figureRed, figureTurquoise, figureWhite, figureYellow } from '../../views/Map/Figure';
import StationMarker from '../../views/Map/StationMarker';
function GameMap(props) {

    const [rts, setRts] = useState(routes)
    const [stations, setStations] = useState(props.stations)
    const [center, setCenter] = useState([47.396985, 8.537292])
    const [zoom, setZoom] = useState(13)
    const [figPos, setFigPos] = useState({})
    const [players, setPlayers] = useState([])
    const [gameStatus, setGameStatus] = useState(null)
    const [mapKey, setMapKey] = useState(1)
    const [resetFields, setResetfields] = useState(0)
    const [flyTo, setFlyTo] = useState(false)
    const [mapFrame, setMapFrame]=useState([[0,0],[0,0]])
    const [mapFrameKey, setMapFrameKey] = useState(0)

    const figures = [figureBlack, figureTurquoise, figureBlue, figureRed, figureWhite, figureYellow];

    const makeMove = (station) => {
        
        props.makeMove(station.id, props.selectedTicket)
        const userId = parseInt(localStorage.getItem("userId"));
        var newPlayers = players
        var player = newPlayers.find((player) => player.id === userId)
        player.position = [station.stop_lat, station.stop_lon]
        setPlayers(newPlayers)
        setResetfields(resetFields + 1)
        props.movesClearer()


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
            figure = figures[idx]
            if (player.stationId !== null) {
                position = props.stations.find(station => station.id === player.stationId)
                position = [position.stop_lat, position.stop_lon]
            } else {
                position = [0, 0]
            }

            formattedPlayers.push({ id: id, figure: figure, position: position })
        })
        setPlayers(formattedPlayers)
        

    }, [props.players, props.stations])



    useEffect(() => {
        const userId = parseInt(localStorage.getItem("userId"));
        if (props.myTurn) {
           var myStationId = props.players.find((player)=>player.user.userId===userId).stationId
            var position = props.stations.find((station) => station.id === myStationId)
            position = [position.stop_lat, position.stop_lon]
            setCenter(position)
            setZoom(16)
            setFlyTo(true)

        }else{
            setFlyTo(false)

        }

    }, [props.myTurn])

    useEffect(()=>{
        
        var possibleMoves = props.possibleMoves
        if(possibleMoves.length>0){
        var userId = parseInt(localStorage.getItem("userId"));
        var myStationId = props.players.find((player)=>player.user.userId===userId).stationId
        var position = props.stations.find((station) => station.id === myStationId)
        
        possibleMoves.push(position)
        var min = [10000.0,10000.0]
        var max = [0.0,0.0]
        possibleMoves.forEach((move)=>{
            if(move.stop_lat>max[0]){
                max[0]=move.stop_lat
            }
            if(move.stop_lon>max[1]){
                max[1]=move.stop_lon
            }
            if(move.stop_lat<min[0]){
                min[0]=move.stop_lat
            }
            if(move.stop_lon<min[1]){
                min[1]=move.stop_lon
            }

        })
        setMapFrame([min, max])
        setMapFrameKey(mapFrameKey+1)
    }
    },[props.possibleMoves])



    return (
        <MapContainer center={center} key={mapKey} attributionControl={false} transparent={true} zoom={zoom} style={{ height: "100vh" }} zoomControl={false} scrollWheelZoom={true} maxBounds={[[47.30326, 8.43891], [47.49071, 8.635674]]} minZoom={12}>
            <ChangeView center={center} zoom={zoom} flyTo={flyTo} mapFrame={mapFrame} mapFrameKey={mapFrameKey}
            zoomToPosition={props.zoomToPosition} />
            <WMSTileLayer
                layers={["ortho_s"]}
                format="image/png"
                transparent={true}
                url="https://wms.zh.ch/OrthoZHWMS"
            />
            <div>
                {props.stations.map((station) =>
                    <StationMarker resetFields={resetFields} myTurn={false} possibleMoves={props.possibleMoves} onClickStation={makeMove} key={"station-" + station.id} station={station} number={station.id} bounds={[station.stop_lat, station.stop_lon]}></StationMarker>
                )}</div>
            {players.map((player) => <Marker key={"players-" + player.id}
                position={player.position}
                icon={player.figure}
            >
            </Marker>)}


            {Object.keys(rts).map((route, index) => <Polyline key={"polyline-" + index} pathOptions={{ color: rts[route].color }} positions={routes[route].positions} />)}
        </MapContainer>
    )
}

export default GameMap
