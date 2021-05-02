import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import L, { bounds } from 'leaflet';
import { MapContainer, SVGOverlay, WMSTileLayer, Circle, Marker, Polyline, AttributionControl, useMap } from 'react-leaflet'
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
    const [lastMrXPosition, setLastMrXPosition] = useState([0,0])
    
    
    const figures = [figureBlack, figureTurquoise, figureBlue, figureRed, figureWhite, figureYellow]

    const makeMove = (station) => {
        console.log(station)
        console.log(props.selectedTicket)
        props.makeMove(station.id, props.selectedTicket)
        const userId = parseInt(localStorage.getItem("userId"));
        var newPlayers = players
        var player = newPlayers.find((player)=>player.id===userId)
        player.position = [station.stop_lat, station.stop_lon]
        setPlayers(newPlayers)

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
            if(player.playerClass == "MRX"){
                figure= figureBlack
            }else{
                figure = figures[idx]
            }
            if(player.playerClass=="DETECTIVE"||props.playerClass=="MRX"|| props.gameStatus.mrXVisible){
                position = props.stations.find(station => station.id===player.stationId)
                position = [position.stop_lat, position.stop_lon]
                if(props.playerClass=="DETECTIVE"&&props.gameStatus.mrXVisible){
                    setLastMrXPosition(position)
                }
            }else{
                position = lastMrXPosition
            }
            formattedPlayers.push({id: id, figure: figure, position: position})
        
            
        })
        setPlayers(formattedPlayers)

    }, [props.players, props.stations])
    

    
 
     useEffect(()=>{
         setOldStatus(gameStatus)
         setGameStatus(props.gameStatus)
        
 
     },[props.gameStatus])

     useEffect(()=>{
         console.log(props.myTurn)
         const currentPlayerId = props.gameStatus.currentPlayer&&props.gameStatus.currentPlayer.user&&props.gameStatus.currentPlayer.user.userId
         const userId = parseInt(localStorage.getItem("userId"));
        
        if(currentPlayerId===userId){
            
            
           setOldStatus(gameStatus)
           var position = props.stations.find((station)=>station.id===props.gameStatus.currentPlayer.stationId)
           position = [position.stop_lat, position.stop_lon]
         
            setCenter(position)
           setZoom(16)
           setOldStatus(gameStatus)
           //setMapKey(mapKey+1)
           
           
        }
 
     },[props.myTurn])



    return (
        <MapContainer center={center} key={mapKey} attributionControl={false} transparent={true} zoom={zoom} style={{ height: "100vh" }} scrollWheelZoom={true}>
           <ChangeView center={center} zoom={zoom} myTurn={props.myTurn} />
            <WMSTileLayer
                layers={["ortho_s"]}
                format="image/png"
                transparent={true}
                url="https://wms.zh.ch/OrthoZHWMS"
            />
            <div>
                {props.stations.map((station) =>
                    <StationMarker myTurn={props.myTurn} possibleMoves={props.possibleMoves} onClickStation={makeMove} key={station.id} station={station} number={station.id} bounds={[station.stop_lat, station.stop_lon]}></StationMarker>
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
