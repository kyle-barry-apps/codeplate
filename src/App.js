import { useState, useEffect } from 'react'
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { googleFontsAPISecret } from './config';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [fonts, setFonts] = useState(null)
  const [variants, setVariants] = useState(null)

  const parseData = (data) => {
    const fontsData = []
    const variantsData = []
    for(const item of data.items) {
      fontsData.push({label: item.family, value: item.family.toLowerCase()})
      variantsData.push({font: item.family, variants: item.variants})
    }
    setFonts(fontsData)
    setVariants(variantsData)
  }

  useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontsAPISecret}`)
    .then(res => res.json())
    .then(data => parseData(data))
  }, [])  


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContainer fonts={fonts} variants={variants}/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
