
import React,{useState, useEffect} from 'react'
import { SVGOverlay, Circle, Popup, Marker} from 'react-leaflet'

export default function StationMarker(props) {
    const [bounds, setBounds] = useState(null);
    const [popupVisibility, setPopupVisibility] = useState(false);
    const [colorScheme, setColorScheme] = useState({
        top: null,
        middle: null,
        bottom: null,
        font: {fill: "#000000"}
    });
    const [circleKey, setCircleKey]= useState(1)
    const [circleColor, setCircleColor] = useState("transparen")
    const [circleRadius, setCircleRadius] = useState(15)
    const [isActive, setIsActive] = useState(false)
    const calcBounds = (point)=>{
        return [[point[0]-0.0006,point[1]-0.0006],[point[0]+0.0006,point[1]+0.0006]]

    }
    useEffect(()=>{
        var station = props.possibleMoves.find((station)=>station.id ===props.number)
        setIsActive(typeof(station)!="undefined")
        if(typeof(station)!="undefined"){
            setCircleColor("red")
            setCircleRadius(50)
            //setCircleKey(circleKey+1)
        }else{
            setCircleColor("transparent")
            setCircleRadius(40)
            //setCircleKey(circleKey+1)
        }
        console.log("BAAAAAAM 1")

        
    },[props.possibleMoves, props.myTurn])

    useEffect(()=>{
       
            setCircleColor("transparent")
            setCircleRadius(50)
            setCircleKey(circleKey+1)
            console.log("BAAAAAAM 2")

        
    }, [props.resetFields])

    useEffect(()=>{
    if(props.station["reachable_by_bus"].length>0&&props.station["reachable_by_tram"].length>0&&props.station["reachable_by_train"].length>0){
        setColorScheme({...colorScheme, top:{fill: "#F4E72D"}, middle:{fill: '#FF0000'}, font:{fill: '#FFFFFF'}, bottom: {fill: "#3299CC"}})
    }
    else if(props.station["reachable_by_bus"].length>0&&props.station["reachable_by_tram"].length>0){
        setColorScheme({...colorScheme, top:{fill: "#F4E72D"}, bottom: {fill: "#3299CC"}})

    }
    else if(props.station["reachable_by_tram"].length>0&&props.station["reachable_by_train"].length>0){
        setColorScheme({...colorScheme, top:{fill: "#3299CC"}, middle:{fill: '#FF0000'}, font:{fill: '#FFFFFF'}, bottom: {fill: "#3299CC"}})

    }else if(props.station["reachable_by_bus"].length>0&&props.station["reachable_by_train"].length>0){
        setColorScheme({...colorScheme, top:{fill: "#F4E72D"}, middle:{fill: '#FF0000'}, font:{fill: '#FFFFFF'}, bottom: {fill: "#F4E72D"}})

    }else if(props.station["reachable_by_bus"].length>0){
        setColorScheme({...colorScheme, top:{fill: "#F4E72D"}, bottom: {fill: "#F4E72D"}})

    }else if(props.station["reachable_by_tram"].length>0){
        setColorScheme({...colorScheme, top:{fill: "#3299CC"}, bottom: {fill: "#3299CC"}})

    }else if(props.station["reachable_by_train"].length>0){
        setColorScheme({...colorScheme, top:{fill: "#FF0000"}, middle:{fill: '#FF0000'}, font:{fill: '#FFFFFF'}, bottom: {fill: "#FF0000"}})
    }
    console.log("BAAAAAAM 3")
    },[])

    const showPopup = (event)=>{
        if(event.type=="mouseover"){
            setPopupVisibility(true)
        }else{
            setPopupVisibility(false)
        }

    }

    
    
    return (
        <>
        {popupVisibility&&<Popup className="stationinfo" closeButton={false} position={props.bounds}>
            <b>{props.station.name}</b>
            </Popup>}
        <Circle center={props.bounds}  radius={circleRadius} key={"circ-"+props.station.id+"-"+circleKey} eventHandlers={{click:()=>{if(isActive){props.onClickStation(props.station)}}, mouseout:showPopup, mouseover:showPopup }} pathOptions={{fillColor: circleColor, stroke: false}}>
        <SVGOverlay attributes={{viewBox: "0 0 28.4 28.4"}} bounds={calcBounds(props.bounds)} eventHandlers={{click:()=>{console.log("Test")}}} >
                <path className="st0" style={colorScheme.top} d="M26.9,14.2c0-7-5.7-12.8-12.8-12.8S1.4,7.1,1.4,14.2H26.9z" />
                <path className="st1" style={colorScheme.bottom} d="M1.4,14.2c0,7,5.7,12.8,12.8,12.8s12.8-5.7,12.8-12.8H1.4z" />
                <g>
                <rect x="4.7" y="7.8" className="st2" style={colorScheme.middle} width="18.9" height="12.8" />
                <text text-anchor="middle" alignment-baseline="central" className="st4 st5" style={colorScheme.font}><tspan x="13.7" y="17.5">{props.number}</tspan> </text>
                </g>
                <rect x="5.7" y="10.6" className="st3" width="17" height="7.2"></rect>
                
            </SVGOverlay>
            </Circle>
            </>
           
    )
}
