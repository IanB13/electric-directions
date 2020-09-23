import fastChargerIcon from '../../resources/fastChargerIcon.svg'
import standardChargerIcon from '../../resources/standardChargerIcon.svg'
const createMarker = (mapState, position, type) => {
    let iconSVG = null;
    let content = null;
    switch(type){
        case 'fast':
        content = '<div> Fast Charger Location! </br> Currently this is randomly generated</div>';
        iconSVG = fastChargerIcon;
        break;
        case 'standard':
        content = `<div> Standard Charger Location! </br> Currently this is randomly generated</div>`;
        iconSVG = standardChargerIcon;
        break;
        default: //will throw error for exaustive type checking in ts
    }
    const icon = {
        url: iconSVG,
        scaledSize: new mapState.maps.Size(25, 25), // scaled size
        origin: new mapState.maps.Point(0, 0), // origin
        anchor: new mapState.maps.Point(25/2, 25/2) // anchor
      };

    const marker = new mapState.maps.Marker({
        position,
        map: mapState.map, 
        icon
  });

    const clientInfoWindow = new mapState.maps.InfoWindow({
        content
    });

    //adds listner to allow click to open
    marker.addListener('click',  () => {
        clientInfoWindow.open(mapState.map, marker);
    });

    return {
        marker,
        position
    }
}

export default createMarker