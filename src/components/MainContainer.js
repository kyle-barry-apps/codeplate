import { useState } from "react"
import GoogleFonts from "../features/css/GoogleFonts"
import ResetCSS from "../features/css/ResetCSS"
import CSSRender from "../features/css/CSSRender"
import CustomProperties from "../features/css/CustomProperties"

const MainContainer = ({ fonts, variants }) => {
  const [customProperties, setCustomProperties] = useState([])
  const [fontForCSS, setFontForCSS] = useState(null)
  const [checkedReset, setCheckedReset] = useState(false)
  const [importUrl, setImportUrl] = useState(null)
  const [cssReset, setCSSreset] = useState('*, \n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}')

  return (
    <main>
      <GoogleFonts setFontForCSS={setFontForCSS} setImportUrl={setImportUrl} fonts={fonts} variants={variants}/>
      <ResetCSS checkedReset={checkedReset} setCheckedReset={setCheckedReset}/>
      <CustomProperties customProperties={customProperties} setCustomProperties={setCustomProperties}/>
      <CSSRender setImportUrl={setImportUrl} setCSSreset={setCSSreset} checkedReset={checkedReset} setCheckedReset={setCheckedReset} cssReset={cssReset} importUrl={importUrl} fontForCSS={fontForCSS} setFontForCSS={setFontForCSS} customProperties={customProperties} setCustomProperties={setCustomProperties}/>
    </main>
  )
}

export default MainContainer