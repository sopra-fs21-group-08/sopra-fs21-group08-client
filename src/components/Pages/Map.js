import React, { useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
function GameMap() {
    var map;
    let mapContainer;

    useEffect(() => {
        map = L.map(mapContainer);
        map.setView([47.36609056723141, 8.544442200801285], 15);
        var wmsLayer = L.tileLayer.wms('https://wms.zh.ch/OrthoZHWMS?', {
            layers: 'ortho_s'
        }).addTo(map);
        L.circle([47.36609056723141, 8.544442200801285], {radius: 5}).addTo(map);



    }, [mapContainer]);


    return (
        <div className="map-container" style={{ height: "100vh", width: "100vw" }} ref={el => mapContainer = el}>

        </div>
    )
}

export default GameMap
