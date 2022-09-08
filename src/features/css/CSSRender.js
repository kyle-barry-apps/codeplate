import { BiReset } from 'react-icons/bi'
import { FiCopy } from 'react-icons/fi'
import { formatCustomProperties } from '../../utils/parsers'

const CSSRender = ({ fontForCSS, setFontForCSS, importUrl, setImportUrl, cssReset, checkedReset, setCheckedReset, customProperties, setCustomProperties }) => {
 
  window.addEventListener('keydown', (event) => {
    if(event.key === 'c' && (event.ctrlKey || event.metaKey)) {
      copyToClipboard()
    }
  });

  const handleReset = () => {
    setImportUrl(null)
    setCheckedReset(false)
    setFontForCSS(null)
    setCustomProperties([])
  }

  const copyToClipboard = () => {
    let fullCopy = ''
    if(importUrl) {
      const importForCopy = `${importUrl} \n\n`
      fullCopy += importForCopy
    }
    if(formattedCustomProperties) {
      const cpForCopy = `:root {\n${formattedCustomProperties}\n}\n\n`
      fullCopy += cpForCopy
    }
    if(checkedReset) {
      const resetForCopy = `${cssReset}\n\n`
      fullCopy += resetForCopy
    }
    if(fontForCSS) {
      const bodyFontForCopy = `body {\n  font-family: '${fontForCSS}', sans-serif;\n}`
      fullCopy += bodyFontForCopy
    }
    navigator.clipboard.writeText(fullCopy)

  }

  const formattedCustomProperties = formatCustomProperties(customProperties)

  return (
    <section className={`${importUrl || formattedCustomProperties || checkedReset || fontForCSS ? 'css-render active' : 'css-render'}`}>
      <div className='btn-container'>
        <button onClick={copyToClipboard} className='reset-btn'><FiCopy color='#E0631B' size={24}/></button>
        <button onClick={handleReset} className='reset-btn'><BiReset color='#E0631B' size={24}/></button>
      </div>
      <br />
      {importUrl ? importUrl + '\n\n': null}
      {formattedCustomProperties ? `:root: {\n${formattedCustomProperties}\n}\n\n` : null}
      {checkedReset ? cssReset + '\n\n': null}
      {fontForCSS ? `body {\n  font-family: '${fontForCSS}', sans-serif;\n}`: null}
    </section>
  )
}

export default CSSRender