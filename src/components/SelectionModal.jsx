import React,{ useState} from 'react'
import { Button, Modal } from 'semantic-ui-react'

const InfoModal = () => {
  const [closestType, setClosestType] = useState(null)
  const [fastCharge, setFastCharge] = useState(false)

  const [open, setOpen] = useState(false)
      const useCheckbox = (rateType) =>{
        const [checked, setChecked] = useState(false)
    
        const onChange = () => {
          if(!checked){
            setClosestType(rateType)
            closestHome.setChecked(false)
            closestWork.setChecked(false)
            shortCommute.setChecked(false)
          } else{
            setClosestType(null)
          }
          setChecked(!checked)
          
        }
        const type = 'checkbox'
        return { DOM: { type, checked, onChange}, setChecked}
    }
    const closestHome = useCheckbox('home')
    const closestWork = useCheckbox('work')
    const shortCommute = useCheckbox('commute')

    const buttonColor = closestType?'blue':'grey'
  return (
    <Modal
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
        <input type = "checkbox" onChange = { () => {setFastCharge(!fastCharge)} } />
          Fast Charging Only
        </div>

        <Button className = {buttonColor}> GO </Button>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal
