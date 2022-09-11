import { useState } from "react"
import GoogleFonts from "../features/css/GoogleFonts"
import ResetCSS from "../features/css/ResetCSS"
import CSSRender from "../features/css/CSSRender"
import CustomProperties from "../features/css/CustomProperties"

const MainContainer = ({ fonts, variants }) => {
  const [openToggle, setOpenToggle] = useState(true)
  const [customProperties, setCustomProperties] = useState([])
  const [fontForCSS, setFontForCSS] = useState(null)
  const [checkedReset, setCheckedReset] = useState(false)
  const [importUrl, setImportUrl] = useState(null)
  const [cssReset, setCSSreset] = useState('*, \n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}')

  return (
    <>
    <div className="clipboard-message">CSS copied to clipboard!</div>
    <main>
      <button onClick={() => setOpenToggle(!openToggle)} className="toggle-btn">CSS Boilerplate<span><img className={`${openToggle ? 'arrow' : 'arrow inactive-arrow'}`} src="./images/arrow-down-3101.png" alt="arrow down image"/></span></button>
      <div className={openToggle ? 'main-active' : 'inactive'}>
        <GoogleFonts active={openToggle} setFontForCSS={setFontForCSS} setImportUrl={setImportUrl} fonts={fonts} variants={variants}/>
        <CustomProperties active={openToggle} customProperties={customProperties} setCustomProperties={setCustomProperties}/> 
        <ResetCSS active={openToggle} checkedReset={checkedReset} setCheckedReset={setCheckedReset}/>

        <p className="ctc-message">*Press Ctrl-c anywhere to copy CSS</p>
      </div>
    </main>
    <CSSRender setImportUrl={setImportUrl} setCSSreset={setCSSreset} checkedReset={checkedReset} setCheckedReset={setCheckedReset} cssReset={cssReset} importUrl={importUrl} fontForCSS={fontForCSS} setFontForCSS={setFontForCSS} customProperties={customProperties} setCustomProperties={setCustomProperties}/>
    </>
  )
}

export default MainContainer