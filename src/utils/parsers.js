export const createGoogleFontUrl = (font, variants) => {
  // extract font family name from font object
  let fontName = font.label
  if(fontName.split(' ').length > 1) {
    fontName = fontName.split(' ').join('+')
  }
  // set empty string to populate for the full variant details
  // if any of the fonts are italicized, the logic will be different for parsing
  let fullVariantString = ''
  let hasItalic = false

  // if there is no variant selected or the variant is just a regular/400 font weight, we just return a simplified url
  if(variants === null || variants.length === 0 || (variants.length === 1 && (variants[0].label === 'regular' || variants[0].label === '400'))) {
    return `@import url('https://fonts.googleapis.com/css2?family=${fontName}&display=swap');`
  }

  if(variants.length === 1 & variants[0].label === 'italic') {
   return `@import url('https://fonts.googleapis.com/css2?family=${fontName}:ital@1&display=swap');` 
  }
  
  // make 'regular' fonts a weight of 400
  const variantLabels = variants.map((v) => v.label !== 'regular' ? v.label : '400')
  
  // set hasItalic to true if any of the variants are italic
  for(const v of variantLabels) {
    if(v.includes('italic')) {
      hasItalic = true
    }
  }

  // create variantArray if hasItalic is true
  const variantsArray = [] 
  if (hasItalic === true) {
    fullVariantString += ':ital,wght@'
    for(const v of variantLabels) { 
      if(v.includes('italic')) {
        if (v === 'italic') {
          variantsArray.push('1,400')
        } else {
          variantsArray.push('1,' + v.split('italic')[0])
        }
      } else {
        variantsArray.push('0,' + v)
      }
    }
  } else {
    for (const v of variantLabels) {
      variantsArray.push(v)
    }
  }
  
  // if hasitalic is false or if only one variant is selected that is not '400'
  if((variants.length > 1 && hasItalic === false) || (variants.length === 1 && !variants[0].label.includes('italic'))) {
    fullVariantString += ':wght@'
  }

  // join the variant array with a semicolon and return the totally formatted url
  fullVariantString += variantsArray.join(';')
  return `@import url('https://fonts.googleapis.com/css2?family=${fontName}${fullVariantString}&display=swap');`
}

export const formatCustomProperties = (customProperties) => {
  if(customProperties != []) {

    const customPropsArray = []

    for(const cp of customProperties) {
      const cpFormatted = `  --${cp.name}: ${cp.value};`
      customPropsArray.push(cpFormatted)
    }  

    return customPropsArray.join('\n')
  } else {
    return ''
  }
}