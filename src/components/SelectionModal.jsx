import React,{ useState} from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import findRoute from "../services/findRoute";

const InfoModal = () => {
    const [routeType, setRouteType] = useState(null);
    const [fastCharge, setFastCharge] = useState(false);
    const [open, setOpen] = useState(false);
    const selector = useSelector(state => state.locations);
    const useCheckbox = (routeType) =>{
        const [checked, setChecked] = useState(false);
    
        const onChange = () => {
            if(!checked){
                setRouteType(routeType);
                closestHome.setChecked(false);
                closestWork.setChecked(false);
                shortCommute.setChecked(false);
            } else{
                setRouteType(null);
            }
            setChecked(!checked);
          
        };
        const style = { "marginRight": "5px"};
        const type = "checkbox";
        return { DOM: { type, checked, onChange, style}, setChecked};
    };
    const closestHome = useCheckbox("home");
    const closestWork = useCheckbox("work");
    const shortCommute = useCheckbox("commute");

    const buttonColor = routeType?"blue":"grey";

    const go = () =>{
        if(routeType){
            setOpen(false);
            findRoute(routeType,fastCharge);
        }
    };
    if(selector?.work){
        return (
            <Modal
                style ={ {
                    "fontSize": "14.5px",
                    "lineHeight":"1.4"
                }}
                closeIcon
                open={open} 
                size='mini'
                trigger={<Button className = "blue" id = "selectionModalButton"> Find Closest Charger</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Modal.Content>
                    <div>
                        <input {...closestHome.DOM} />
          Closest to Home 
                    </div>
                    <div>
                        <input {...closestWork.DOM} />
          Closest to Work
                    </div>
                    <div>
                        <input {...shortCommute.DOM} />
          Shortest commute change
                    </div>
                    <div>
                        <input type = "checkbox" checked ={fastCharge} onChange = { () => {setFastCharge(!fastCharge);} } />
          Fast Charging Only
                    </div>

                    <Button className = {buttonColor} onClick = {go} style ={{"margin-top":"8px"}}> GO </Button>
                </Modal.Content>
            </Modal>
        );
    }
    else return null;
};

export default InfoModal;
