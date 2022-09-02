import Select from 'react-select'
import { useState } from 'react'

const fontOptions = [
  {label: 'Montserrat', value: 'montserrat'},
  {label: 'Sans-serif', value: 'sans-serif'},
  {label: 'Poppins', value: 'poppins'}
]

const variantOptions = [
  {label: '300', value: '300'},
  {label: '500', value: '500'},
  {label: '700', value: '700'}
]


const GoogleFonts = () => {
  const [font, setFont] = useState()
  const [variant, setVariant] = useState()

  
  const handleFontChange = (value) => {
    setFont(value)
  }

  const handleVariantChange = (value) => {
    setVariant(value)
  }

  console.log(font, variant)

  return (
    <>
    <h2>Google Fonts</h2>
    <section className='google-fonts'> 
      <Select className='font-selector' options={fontOptions} onChange={handleFontChange} />
      <Select className='variant-selector' options={variantOptions} onChange={handleVariantChange} />
      <button className='add-font-btn'>+</button>
    </section>
    </>
  )
}

export default GoogleFonts