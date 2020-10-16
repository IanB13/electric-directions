const builderReducer = (state = null, action) => {
    switch (action.type) {
    case "ADD_HOME_LOCATION":
        const locationHome = {...state};
        locationHome.home = {...action.data};
        return locationHome;
    case "ADD_WORK_LOCATION":
        const locationWork = {...state};
        locationWork.work = {...action.data};
        return locationWork;
    default:
        return state;
    }
};
  
export default builderReducer;