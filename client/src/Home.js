import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const myStyle = {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  };

  const imgStyle = {
    width: "50%",
    backgroundImage: "url('./bgimage.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const col2Style = {
    backgroundColor: "#86CEEB",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Supply chain
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/roles">
                Register <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/addmed">
                Order Products <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/supply">
                Control Supply Chain <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/track">
                Track Products <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main style={myStyle} className="main-div">
        {/* First column: Image */}
        <div style={imgStyle} className="col1"></div>

        {/* Second column: Get Started content */}
        <div style={col2Style} className="col2-jumbotron">
          <h1 className="display-4">WELCOME!!</h1>
          <p className="lead">
            Our supply chain system manages how things get from where they're
            made to where they're needed, making it smooth and efficient.
          </p>
          <hr className="my-4" />
          <p>
            Unlocking efficiency, enhancing connectivity: Revolutionize your
            supply chain effortlessly.
          </p>
          <p className="lead">
            <Link
              className="btn btn-primary btn-lg"
              to="/Homesec"
              role="button"
            >
              Get Started
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Home;
