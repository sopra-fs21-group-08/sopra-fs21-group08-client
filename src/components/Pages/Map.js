import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import L, { bounds } from 'leaflet';
import { MapContainer, SVGOverlay, WMSTileLayer, Circle, Marker, Polyline, AttributionControl } from 'react-leaflet'
import { figureTurquoise, figureBlack, figureBlue, figureRed, figureWhite, figureYellow } from '../../views/Map/Figure'
import ChangeView from '../../views/Map/ChangeView'
import StationMarker from '../../views/Map/StationMarker'
import routes from '../../assets/mockstations/routes'
function GameMap(props) {

    const [rts, setRts] = useState(routes)
    const [stations, setStations] = useState(props.stations)
    const [center, setCenter] = useState([47.367270, 8.534655])
    const [zoom, setZoom] = useState(13)
    const [figPos, setFigPos] = useState({})
    const [players, setPlayers] = useState([])
    const [gameStatus, setGameStatus] = useState(null)
    const [oldStatus, setOldStatus] = useState(null)
    const [mapKey, setMapKey] = useState(1)
    
    
    const figures = [figureTurquoise, figureBlack, figureBlue, figureRed, figureWhite, figureYellow]

    const makeMove = (station) => {
        console.log(station)
        console.log(props.selectedTicket)
        props.makeMove(station.id, props.selectedTicket)

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
    
    useEffect(()=>{
        
        if(props.possibleMoves.length>0){
            console.log(props.possibleMoves)
        }

    },[props.possibleMoves])

    useEffect(()=>{
        if(props.myTurn&&oldStatus ===null&&gameStatus!==null&&typeof(gameStatus)!="undefined"){
           setOldStatus(gameStatus)
           var position = props.stations.find((station)=>station.id===gameStatus.currentPlayer.stationId)
           position = [position.stop_lat, position.stop_lon]
           setCenter(position)
           setZoom(16)
           setOldStatus(gameStatus)
           setMapKey(mapKey+1)
           
        }
 
     },[gameStatus, props.myTurn])
 
     useEffect(()=>{
         setOldStatus(gameStatus)
         setGameStatus(props.gameStatus)
        
 
     },[props.gameStatus])



    return (
        <MapContainer center={center} key={mapKey} attributionControl={false} transparent={true} zoom={zoom} style={{ height: "100vh" }} scrollWheelZoom={true}>
            <WMSTileLayer
                layers={["ortho_s"]}
                format="image/png"
                transparent={true}
                url="https://wms.zh.ch/OrthoZHWMS"
            />
            <div>
                {props.stations.map((station) =>
                    <StationMarker possibleMoves={props.possibleMoves} onClickStation={makeMove} key={station.id} station={station} number={station.id} bounds={[station.stop_lat, station.stop_lon]}></StationMarker>
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
