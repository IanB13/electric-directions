import fastChargerIcon from '../../resources/fastChargerIcon.svg'
import standardChargerIcon from '../../resources/standardChargerIcon.svg'
import homeIcon from '../../resources/homeIcon.svg'
import workIcon from '../../resources/workIcon.svg'

const createMarker = (mapState, position, type) => {
    let iconSVG = null;
    let content = null;
    let iconAnchor = null;
    switch(type){
        case 'fast':
            content = '<div> Fast Charger Location! </br> Currently this is randomly generated</div>';
            iconSVG = fastChargerIcon;
            iconAnchor = new mapState.maps.Point(26/2, 26/2) // for anchored location
            break;
        case 'standard':
            content = `<div> Standard Charger Location! </br> Currently this is randomly generated</div>`;
            iconSVG = standardChargerIcon;
            iconAnchor = new mapState.maps.Point(26/2, 26/2) // for anchored location
            break;
        case 'work':
            content = `<div> Your Work Location!</div>`;
            iconSVG = workIcon;
            iconAnchor = new mapState.maps.Point(0, 0) //for prettier clicking
            break;
        case 'home':
            content = `<div> Your Home Location!</div>`;
            iconSVG = homeIcon;
            iconAnchor = new mapState.maps.Point(0, 0) //for prettier clicking
            break;
        default: 
    }
    const icon = {
        url: iconSVG,
        scaledSize: new mapState.maps.Size(26, 26), // scaled size
        origin: new mapState.maps.Point(0, 0), // origin
        anchor: iconAnchor
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
        position,
        type
    }
}

export default createMarker