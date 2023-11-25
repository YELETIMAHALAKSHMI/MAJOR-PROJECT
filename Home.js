import React from 'react'
import { useHistory } from "react-router-dom"



function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supply')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
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
        <a className="nav-link"  onClick={redirect_to_roles} href="#">Register <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" onClick = {redirect_to_addmed} href="#">order products<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a  className="nav-link" onClick = {redirect_to_supply} href="#">control supply chain <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" onClick={redirect_to_track} href="#">Track products <span className="sr-only">(current)</span></a>
      </li>
      </ul>
    
  </div>
</nav>
<div style={myStyle}>
    <main class = "my-8">
    <div class="jumbotron" style={myStyle2}>
  <h1 class="display-4">WELCOME!!</h1>
  <p class="lead">Our supply chain system manages how things get from where they're made to where they're needed, making it smooth and efficient.</p>
  <hr class="my-4"/>
  <p>Unlocking efficiency, enhancing connectivity: Revolutionize your supply chain effortlessly.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" onClick={redirect_to_roles} role="button">Get Started</a>
  </p>
</div>
    </main>
</div>

   
</>
    )
}

export default Home
