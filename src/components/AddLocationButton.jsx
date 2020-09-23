import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch,useSelector } from 'react-redux';
import createMarker from '../services/marker/create';
import homeIcon from '../resources/homeIcon.svg';
import workIcon from '../resources/workIcon.svg';


const AddLocationButton = () => {
  const [locType,setLocType] = useState('home')
  const state = useSelector(state => state)
  const dispatch = useDispatch();

  const {google} = state
  const homeCursor = {
    draggableCursor: `url(${homeIcon}), crosshair`
  }
  const workCursor = {
    draggableCursor: `url(${workIcon}), crosshair`
  }

  const addLocation = () => {
    if (locType === 'home') google.map.setOptions(homeCursor);
    else google.map.setOptions(workCursor);

    
    const addMarker = google.maps.event.addListener(google.map, 'click', (event) => {
      placeMarker(event.latLng);
    });

    const placeMarker = (location) => {
      createMarker(google, location, locType)
      google.maps.event.removeListener(addMarker)
      google.map.setOptions({draggableCursor:''});
    }
  
    if (locType === 'home'){
       setLocType('work')
      //dispatch
      }
    else{ setLocType(null)}
  }



  if (locType === 'home') {
    return (
      <Button className="black"
        id="addLocationsButton"
        onClick={addLocation}>
        Add Home </Button>
    )
  }
  else if (locType === 'work') {
    return (
      <Button className="black"
        id="addLocationsButton"
        onClick={addLocation}>
        Add Work </Button>
    )
  }
  else return null
}

export default AddLocationButton
