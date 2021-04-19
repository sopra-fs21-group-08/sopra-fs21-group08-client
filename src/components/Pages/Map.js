import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import L, { bounds } from 'leaflet';
import { MapContainer, SVGOverlay, WMSTileLayer, Circle, Marker, Polyline, AttributionControl } from 'react-leaflet'
import {iconPerson as figure} from '../../views/Map/Figure'
import StationMarker from '../../views/Map/StationMarker'
import routes from '../../assets/mockstations/routes'
function GameMap(props) {

    const [rts, setRts]=useState(routes)
    const [stations, setStations] = useState(props.stations)
    const [figPos, setFigPos]=useState({})

    const changePosition = (station)=>{
        setFigPos(station)
        console.log(station.name)

    }
    useEffect(()=>{
        console.log(stations)
        setFigPos({"stop_lat": 47.3668727813338,
		"stop_lon": 8.54533193921056})
    },[])



    return (
        <MapContainer center={[47.367270, 8.534655]} attributionControl={false}  transparent={true} zoom={13} style={{ height: "100vh" }} scrollWheelZoom={true}>
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
                        <Marker
        position={[ figPos.stop_lat, figPos.stop_lon]}
        icon={ figure }
        >
      </Marker>
      
      
      {Object.keys(rts).map((route)=><Polyline pathOptions={{color: rts[route].color}} positions={routes[route].positions} />)}
        </MapContainer>
    )
}

export default GameMap
