import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'
import findRoute from '../services/findRoute'

const InfoModal = () => {
  const [routeType, setRouteType] = useState(null)
  const [fastCharge, setFastCharge] = useState(false)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

      const useCheckbox = (routeType) =>{
        const [checked, setChecked] = useState(false)
    
        const onChange = () => {
          if(!checked){
            setRouteType(routeType)
            closestHome.setChecked(false)
            closestWork.setChecked(false)
            shortCommute.setChecked(false)
          } else{
            setRouteType(null)
          }
          setChecked(!checked)
          
        }
        const type = 'checkbox'
        return { DOM: { type, checked, onChange}, setChecked}
    }
    const closestHome = useCheckbox('home')
    const closestWork = useCheckbox('work')
    const shortCommute = useCheckbox('commute')

    const buttonColor = routeType?'blue':'grey'

    const go = () =>{
      if(routeType){
          setOpen(false)
          dispatch(findRoute(routeType,fastCharge))
      }
    }
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

        <Button className = {buttonColor} onClick = {go}> GO </Button>
      </Modal.Content>
    </Modal>
  )
}

export default InfoModal
