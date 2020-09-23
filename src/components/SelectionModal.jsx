import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function InfoModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open} 
      size='small'
      trigger={<Button className = "blue" id = "selectionModalButton"> Find Closest Charger</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Content>
        <p>
        This app helps find the best charger location for you!
        Enter where you live or the closest location and we will find the 
        best charger for you to use!
        </p>
        <div>View the source code <a href ="https://github.com/IanB13/travel-cost-estimator">here</a>. </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal
