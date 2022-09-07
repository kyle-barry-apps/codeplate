import { useState } from 'react'
import Select from 'react-select'
import { createGoogleFontUrl } from '../../utils/parsers'

const GoogleFonts = ({ setFontForCSS, setImportUrl, fonts, variants }) => {
  
  // Get data from user input and hold variant options in state
  const [selectedFont, setSelectedFont] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [variantOptions, setVariantOptions] = useState(null)

  // const [importUrl, setImportUrl] = useState(null)
  
  // Set the font value based on user input and get the variants associated with that font
  const handleFontChange = (value) => {
    setSelectedFont(value)
    getVariantOptions(value)
  }

  // Set the selected variant(s)
  const handleVariantChange = (value) => {
    setSelectedVariant(value)
  }

  const getVariantOptions = (selectedFont) => {
    const formattedOptions = []
    // Find the font chosen's variants and store that
    const fontVariants = variants.find((font) => font.font === selectedFont.label).variants
    for (const v of fontVariants) {
      formattedOptions.push({label: v, value: v})
    }
    setVariantOptions(formattedOptions)
  }


  const handleClick = (selectedFont, selectedVariant) => {
    if (selectedFont !== null) {
      const importUrl = createGoogleFontUrl(selectedFont, selectedVariant)
      setImportUrl(importUrl)
      setFontForCSS(selectedFont.label)
    } else {
      console.log('No font selected')
    }
  }
  

  return (
    <>
    <h3>Google Fonts</h3>
    <section className='google-fonts'> 
      <Select placeholder='Select font...' className='font-selector' options={fonts} onChange={handleFontChange} />
      <Select placeholder='Select variant...' className='variant-selector' isMulti options={variantOptions} onChange={handleVariantChange} />
      <button onClick={() => handleClick(selectedFont, selectedVariant)} className='add-btn'>+</button>
    </section>
    </>
  )
}

export default GoogleFonts