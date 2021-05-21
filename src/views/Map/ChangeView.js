import React,{useEffect} from 'react'
import {useMap } from 'react-leaflet'

function ChangeView({ center, zoom, flyTo, mapFrame, mapFrameKey }) {
  const map = useMap();
    useEffect(()=>{
      if(flyTo){
        console.log(center)
        map.flyTo(center, zoom)
      }
    },[flyTo])
    useEffect(()=>{
      if(mapFrameKey>0){
      map.flyToBounds(mapFrame)
    }
    },[mapFrameKey])
  return null;
}

export default ChangeView
