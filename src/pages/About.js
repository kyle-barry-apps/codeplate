
const About = () => {
  return (
    <section className="about-container">
      <div className="content-container">
        <div className="about-contact">
          <h1 style={{fontWeight: 500, fontSize: 20}}>About <span style={{color: '#554D74'}}>CodePlate</span></h1>
          <p>Developed by: <span style={{fontWeight: 500}}>Kyle Barry</span></p>
          <p>Contact me: webdev.ksb@gmail.com</p>
        </div>
        <div className="line-with-balls">
          <div className="ball1"></div>
          <div className="ball2"></div>
        </div>
        <div className="about-details">
          <p>CodePlate is built on <span style={{fontWeight: 500, color: '#31293F'}}>React</span> and designed to make setting up coding projects quicker and easier.</p>
          <h4 style={{color: '#31293F'}}>V.0.1</h4>
          <p>CSS boilerplate</p>
          <ul>
            <li>google fonts <a href="https://developers.google.com/fonts" className="api-link" target={"_blank"}>API</a></li>
            <li>custom properties</li>
            <li>css reset option</li>
          </ul>

          <h4 style={{color: '#31293F'}}>V.0.2</h4>
          <p>To be determined...</p>
        </div>
      </div>
    </section>
  )
}

export default About