import { useState } from 'react'
import Select from 'react-select'
import { createGoogleFontUrl } from '../../utils/parsers'

const GoogleFonts = ({ openToggle, setFontForCSS, setImportUrl, fonts, variants }) => {
  
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
    for (let v of fontVariants) {
      if(v === 'regular') {
        v = '400'
      }
      if(v === 'italic') {
        v = '400italic'
      }
      formattedOptions.push({label: v, value: v})
    }
    setVariantOptions(formattedOptions)
  }


  const handleClick = (e, selectedFont, selectedVariant) => {
    e.preventDefault()
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
    <h5 className='google-fonts-title'>Google Fonts</h5> 
    <form onSubmit={(e) => handleClick(e, selectedFont, selectedVariant)}>
    <section className='google-fonts'> 
        <Select placeholder='Select font...' className='font-selector' options={fonts} onChange={handleFontChange} />
        <Select placeholder='Select variants...' className='variant-selector' isMulti options={variantOptions} onChange={handleVariantChange} />
        <button onClick={() => handleClick(selectedFont, selectedVariant)} className='add-btn'>+</button>
    </section>
    </form>
    </>
  )
}

export default GoogleFonts