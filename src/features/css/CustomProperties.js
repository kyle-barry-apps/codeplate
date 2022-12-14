import { useRef, useState } from "react"


const CustomProperties = ({ customProperties, setCustomProperties }) => {
  const [cpName, setCPName] = useState('')
  const [cpValue, setCPValue] = useState('')
  const [newCustomProp, setNewCustomProp] = useState({})
  const nameRef = useRef(null)

  const handleNameChange = (e) => {
    setCPName(e.target.value)
    setNewCustomProp({...newCustomProp, name: e.target.value})
  }

  const handleValueChange = (e) => {
    setCPValue(e.target.value)
    setNewCustomProp({...newCustomProp, value: e.target.value})  
  }

  const handleAddProp = (e) => {
    e.preventDefault()
    if(cpName && cpValue) {
      setCustomProperties(current => [...current, newCustomProp])
      setCPName('')
      setCPValue('')
      nameRef.current.focus()
    }
    else {
      console.log('No property name or value given')
    }
  }

  return (
    <>
    <h5>Custom Properties</h5>
    <form onSubmit={(e) => handleAddProp(e)}>
      <section className="custom-properties">
        <input ref={nameRef} value={cpName} onChange={handleNameChange} type="text" placeholder='e.g. primary-dark' className="custom-property-input" />
        <input value={cpValue} onChange={handleValueChange} type="text" placeholder='e.g. #554D74' className="custom-property-input"/>
        <button onClick={handleAddProp} className='add-btn'>+</button>    
      </section>
    </form>    
    </>
  )
}

export default CustomProperties