import React from "react";
import "./App.css";
import Map from "./components/Map"; 
import SelectionModal from "./components/SelectionModal";
import InfoModal from "./components/InfoModal";
import Instructions from "./components/Instructions";
import "semantic-ui-css/semantic.min.css";
import AddLocationButton from "./components/AddLocationButton";

function App() {
    return (
        <div className="App">
            <Map />
            <AddLocationButton />
            <Instructions />
            <SelectionModal />
            <InfoModal />
        </div>
    );
}

export default App;
