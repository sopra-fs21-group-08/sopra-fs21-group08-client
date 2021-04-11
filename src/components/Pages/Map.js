import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import L, { bounds } from 'leaflet';
import { MapContainer, SVGOverlay, WMSTileLayer, Circle, Marker } from 'react-leaflet'
import {iconPerson as figure} from '../../views/Map/Figure'
import StationMarker from '../../views/Map/StationMarker'
import stations from '../../assets/mockstations/stations.json'
function GameMap() {

    const [figPos, setFigPos]=useState(stations[439])

    const changePosition = (station)=>{
        setFigPos(station)


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
                        {stations.map((station, index) =>
                            <StationMarker onClickStation={changePosition} key={station.DIVA_NR} station={station} transport={station.VTYP} number={index} bounds={[station.N, station.E]}></StationMarker>
                        )}</div>
                        <Marker
        position={[ figPos.N, figPos.E]}
        icon={ figure }
        >
      </Marker>
                        

            
            
        </MapContainer>
    )
}

export default GameMap
