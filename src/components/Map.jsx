import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { googleFinishedLoading } from "../reducers/actions";

const Map = () => {
    const dispatch = useDispatch();
    const mapRef = useRef();

    //initializes map, only happens once
    useEffect(()=>{
        dispatch(googleFinishedLoading(mapRef));
    },[dispatch]); 

    return (
        <div className="map-overlay">
            <div ref={mapRef} className="google-map" />
        </div>
    );
};
      
export default Map;