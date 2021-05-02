import React,{useEffect} from 'react'
import {useMap } from 'react-leaflet'

function ChangeView({ center, zoom, myTurn }) {
  const map = useMap();
    useEffect(()=>{
      if(myTurn){
        map.flyTo(center, zoom)
      }
    },[myTurn])
  return null;
}

export default ChangeView
