import React from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Home() {
    const myStyle = {
        backgroundColor: '#042743',
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        //backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
    };
    const myStyle2 = {
      backgroundColor: '#86CEEB',
     
    
  }
    
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Supply chain</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to ="/roles">Register <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" href="/addmed">order products<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link  className="nav-link" to="/supply">control supply chain <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/track">Track products <span className="sr-only">(current)</span></Link>
      </li>
      </ul>
    
  </div>
</nav>
<main style={myStyle} className='main-div'>
  
<img src = "bgimage.jpg" style={{height: '100%'}} className='col1'/>
<div className="col2-jumbotron" style={myStyle2}>
  <h1 class="display-4">WELCOME!!</h1>
  <p class="lead">Our supply chain system manages how things get from where they're made to where they're needed, making it smooth and efficient.</p>
  <hr class="my-4"/>
  <p>Unlocking efficiency, enhancing connectivity: Revolutionize your supply chain effortlessly.</p>
  <p class="lead">
    <Link class="btn btn-primary btn-lg" to="/Homesec" role="button">Get Started</Link>
  </p>
</div>

 
  

</main>




   
</>
    )
}

export default Home

