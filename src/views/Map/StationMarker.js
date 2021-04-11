import React,{useState, useEffect} from 'react'
import { SVGOverlay, Circle} from 'react-leaflet'

export default function StationMarker(props) {
    const [bounds, setBounds] = useState(null);
    const [colorScheme, setColorScheme] = useState({
        top: null,
        middle: null,
        bottom: null
    });
    const calcBounds = (point)=>{
        return [[point[0]-0.0002,point[1]-0.0002],[point[0]+0.0002,point[1]+0.0002]]

    }
    useEffect(()=>{
    if(props.transport.includes("Bus")&&props.transport.includes("Tram")){
        setColorScheme({...colorScheme, top:{fill: "#F4E72D"}, bottom: {fill: "#3299CC"}})
    }else if(props.transport.includes("Bus")){
        setColorScheme({...colorScheme, top:{fill: "#F4E72D"}, bottom: {fill: "#F4E72D"}})

    }else if(props.transport.includes("Tram")){
        setColorScheme({...colorScheme, top:{fill: "#3299CC"}, bottom: {fill: "#3299CC"}})

    }
    },[])

    
    
    return (
        <Circle center={props.bounds}  radius={15} eventHandlers={{click:()=>{props.onClickStation(props.station)}}} pathOptions={{fillColor: 'transparent', fillOpacity: 0, stroke: false}}>
        <SVGOverlay attributes={{viewBox: "0 0 28.4 28.4"}} bounds={calcBounds(props.bounds)} eventHandlers={{click:()=>{console.log("Test")}}} >
                <path className="st0" style={colorScheme.top} d="M26.9,14.2c0-7-5.7-12.8-12.8-12.8S1.4,7.1,1.4,14.2H26.9z" />
                <path className="st1" style={colorScheme.bottom} d="M1.4,14.2c0,7,5.7,12.8,12.8,12.8s12.8-5.7,12.8-12.8H1.4z" />
                <rect x="4.7" y="7.8" className="st2" width="18.9" height="12.8" />
                <rect x="5.7" y="10.6" className="st3" width="17" height="7.2" />
                <text transform="matrix(1 0 0 1 5.697 17.7227)" className="st4 st5"> {props.number} </text>
            </SVGOverlay>
            </Circle>
           
    )
}
