import React from "react";
import { Modal, List } from "semantic-ui-react";


function InfoModal() {
    const [open, setOpen] = React.useState(true);
    return (
        <Modal
            closeIcon
            open={open}
            size = 'tiny' 
            onClose={() => setOpen(false)}
        >
            <Modal.Content>
                <List as='ol'>
                    <List.Item as='li'>Press the button on the top right to add your house </List.Item>
                    <List.Item as='li'>Then add your place of work</List.Item>
                    <List.Item as='li'> A new button will then appear which you can use to find useful chargers!
                    </List.Item>
                </List>
            </Modal.Content>
        </Modal>
    );
}

export default InfoModal;