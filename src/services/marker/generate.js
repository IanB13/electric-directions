import createMarker from './create';
import {randLocLondon} from '../geoFunctions';
  
export const jobMarkerGenerator =(mapState)=>{
    //creates  random EVS around London
    const markerData = []
    for(let i = 0; i < 4; i++) {
        const type = Math.round(Math.random()-0.2)?'fast':'standard' // -0.2 to make standard more likely
        const markerDataPoint = createMarker(mapState,randLocLondon(),type)
        markerData.push(markerDataPoint)
    }
    return markerData;
}
