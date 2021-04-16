import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import L, { bounds } from 'leaflet';
import { MapContainer, SVGOverlay, WMSTileLayer, Circle, Marker, Polyline } from 'react-leaflet'
import {iconPerson as figure} from '../../views/Map/Figure'
import StationMarker from '../../views/Map/StationMarker'
import stations from '../../assets/mockstations/stations.json'
import routes from '../../assets/mockstations/routes'
function GameMap() {

    const [figPos, setFigPos]=useState(stations[98])

    const changePosition = (station)=>{
        setFigPos(station)
        console.log(station.name)

    }



    return (
        <MapContainer center={[47.367270, 8.534655]} transparent={true} zoom={13} style={{ height: "100vh" }} scrollWheelZoom={true}>
            <WMSTileLayer
                layers={["ortho_s"]}
                format="image/png"
                transparent={true}
                url="https://wms.zh.ch/OrthoZHWMS"
            />
            <div>
                        {stations.map((station) =>
                            <StationMarker onClickStation={changePosition} key={station.id} station={station} number={station.id} bounds={[station.stop_lat, station.stop_lon]}></StationMarker>
                        )}</div>
                        <Marker
        position={[ figPos.stop_lat, figPos.stop_lon]}
        icon={ figure }
        >
      </Marker>
      
      
      {Object.keys(routes).map((route)=><Polyline pathOptions={{color: routes[route].color}} positions={routes[route].positions} />)}

                        

            
            
        </MapContainer>
    )
}

export default GameMap
