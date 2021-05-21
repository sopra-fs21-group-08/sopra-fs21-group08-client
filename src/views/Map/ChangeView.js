import React,{useEffect} from 'react'
import {useMap } from 'react-leaflet'

function ChangeView({ center, zoom, flyTo, mapFrame, mapFrameKey, zoomToPosition }) {
  const map = useMap();
    useEffect(()=>{
      if(flyTo){
        console.log(center)
        map.flyTo(center, zoom)
      }
    },[flyTo])
    useEffect(()=>{
      if(mapFrameKey>0){
      map.flyToBounds(mapFrame,{paddingTopLeft: [60.0,60.0], paddingTopRight: [10.0,10.0] })
    }
    },[mapFrameKey])
    useEffect(()=>{
      if(zoomToPosition.length>0){
        console.log(center)
        map.flyTo(zoomToPosition, 15)
      }
    },[zoomToPosition])
  return null;
}

export default ChangeView
