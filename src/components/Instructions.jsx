/* eslint-disable no-unused-vars */
import React from 'react'
import { Modal, List ,Image } from 'semantic-ui-react'


function InfoModal() {
  const [open, setOpen] = React.useState(true)
  const IconStyle = {
    "height": "1.5em",
    'paddingLeft':' 0.2em',
    'paddingRight': '0.2em'
}
  return (
    <Modal
      closeIcon
      open={open}
      size = 'tiny' 
      onClose={() => setOpen(false)}
    >
      <Modal.Content>
        <List as='ol'>
        <List.Item as='li'>Instructions are </List.Item>
        <List.Item as='li'>here</List.Item>
        <List.Item as='li'>to find
        </List.Item>
        </List>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal