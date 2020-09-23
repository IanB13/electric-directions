import {routeDirections} from './geoFunctions';
import {store} from '../reducers/store'

const findRoute = async (routeType,fastCharge)  =>{
    const {chargers,google,locations} = store.getState();
    const chargerArray = fastCharge? chargers.filter(charge => charge.type ==='fast') : chargers

    let origin = locations.home.position
    if(routeType === 'work') origin = locations.work.position

    if(routeType === 'work' || routeType === "home"){
        await findClosest(origin,chargerArray,google)
        
    }
    else if(routeType ==='commute'){
        findDetour(locations,chargerArray,google)
    }
}


const findClosest = async (origin,chargerArray,google) =>{

    const routeArray =  await Promise.all(chargerArray.map( async charger =>{
        
        const directions = await routeDirections(origin,charger.position,google)

        const travel ={
            dist: directions.routes[0].legs[0].distance.value,
            directions
        }

        return( travel)
    })
    )

    const route =  routeArray.reduce((accumulator, currentValue) => {
        let routeObj = accumulator
        if( currentValue.dist < accumulator.dist){
            routeObj = currentValue
        }
        return routeObj
    }, routeArray[0])
    //TODO: Move this?
    google.directionsRenderer.setDirections(route.directions);
}

const findDetour = async(locations,chargers,google) =>{

        const routeArray =  await Promise.all(chargers.map( async charger =>{
        
        const directions = await routeDirections(locations.home.position,locations.work.position,google,[{location: charger.position}])

        const dist = directions.routes[0].legs[0].distance.value + directions.routes[0].legs[1].distance.value;

        const travel ={
            dist,
            directions
        }

        return( travel)
    })
    )

    const route =  routeArray.reduce((accumulator, currentValue) => {
        let routeObj = accumulator
        if( currentValue.dist < accumulator.dist){
            routeObj = currentValue
        }
        return routeObj
    }, routeArray[0])

    google.directionsRenderer.setDirections(route.directions)
}

export default findRoute
