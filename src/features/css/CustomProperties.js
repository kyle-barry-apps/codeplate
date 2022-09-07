import { useState } from "react"


const CustomProperties = ({ customProperties, setCustomProperties }) => {
  const [newCustomProp, setNewCustomProp] = useState({})

  const handleNameChange = (e) => {
    setNewCustomProp({...newCustomProp, name: e.target.value})
  }

  const handleValueChange = (e) => {
    setNewCustomProp({...newCustomProp, value: e.target.value})  
  }

  const handleAddProp = () => {
    setCustomProperties(current => [...current, newCustomProp])
  }

  return (
    <>
    <h3>Custom Properties</h3>    
    <section className="custom-properties">
      <input onChange={handleNameChange} type="text" placeholder='Name...' className="custom-property-input" />
      <input onChange={handleValueChange} type="text" placeholder='Value...' className="custom-property-input"/>
      <button onClick={handleAddProp} className='add-btn'>+</button>    </section>
    </>
  )
}

export default CustomProperties