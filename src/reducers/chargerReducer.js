/* eslint-disable no-case-declarations */
const jobsReducer = (state = {loading:true}, action) => {
    switch (action.type) {
    case "INIT_CHARGER_MARKERS":
        const initJobs = action.data;
        return initJobs;
    case "ADD_TRAVEL":
        const travelJobs = action.data;
        return travelJobs;
    case "UPDATE_MARKERS":
        const markerJobs = action.data;
        return markerJobs;
    default:
        return state;
    }
};
  
export default jobsReducer;