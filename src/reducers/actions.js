import {jobMarkerGenerator} from "../services/marker/generate";
import {store} from "./store";

//initilize map
import GoogleMapsApiLoader from "google-maps-api-loader";
// eslint-disable-next-line no-undef
const apiKey = process.env.REACT_APP_API_KEY;
//sets location to London,England
const googleMapsOptions = {
    zoom: 10.06,
    center: {
        lat: 51.4894681,
        lng:  -0.1324313
    },
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
};

//Creates google map
export const initMap = (mapRef) =>{
    return async dispatch => {
        const google = await GoogleMapsApiLoader({ apiKey });
        const map = new google.maps.Map(mapRef.current, googleMapsOptions);
        dispatch({
            type: "INIT_MAP",
            data:{
                map,
                maps:google.maps,
                loading:false,
            }
        });
    };
};

//Creates google map
export const initDirectionsRender = (google) =>{
    return async dispatch => {
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(google.map);
        dispatch({
            type: "INIT_DIRECTIONS_RENDERER",
            data:{
                ...google,
                directionsRenderer
            }
        });
    };
};

// Initilizes Jobs and builder
export const initalizeChargerMarkers =(google) =>{
    return  dispatch => {
        const data = jobMarkerGenerator(google);
        dispatch({
            type: "INIT_CHARGER_MARKERS",
            data
        });
    };
};


export const addHome = (markerData) =>{
    return  dispatch => {
        dispatch({
            type: "ADD_HOME_LOCATION",
            data: {...markerData},
        });
    };

};

export const addWork = (markerData) => {
    return  dispatch => {
        dispatch({
            type: "ADD_WORK_LOCATION",
            data: {...markerData},
        });
    };

};

//TODO: reduce into single dispatch
export const googleFinishedLoading  = (mapRef) => async (dispatch) =>{
    await dispatch(initMap(mapRef));
    const initGoogle = store.getState().google;
    await dispatch(initalizeChargerMarkers(initGoogle));
    await dispatch(initDirectionsRender(initGoogle));
};