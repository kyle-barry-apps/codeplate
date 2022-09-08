import { BiReset } from 'react-icons/bi'
import { FiCopy } from 'react-icons/fi'
import { formatCustomProperties } from '../../utils/parsers'

const CSSRender = ({ fontForCSS, setFontForCSS, importUrl, setImportUrl, cssReset, checkedReset, setCheckedReset, customProperties, setCustomProperties }) => {

  const clipboardMessage = document.querySelector('.clipboard-message') 

  const clipboardInactive = () => {
    clipboardMessage.classList.remove('active')
  }

  window.addEventListener('keydown', (event) => {

    if(event.key === 'c' && (event.ctrlKey || event.metaKey)) {
      copyToClipboard()
      clipboardMessage.classList.add('active')
      setTimeout(clipboardInactive, 2000)
 
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
        <button onClick={copyToClipboard} className='reset-btn'><FiCopy color='#31293F' size={30}/></button>
        <button onClick={handleReset} className='reset-btn'><BiReset color='#31293F' size={30}/></button>
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