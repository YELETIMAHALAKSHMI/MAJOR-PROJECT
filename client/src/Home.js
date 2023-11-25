import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const redirect_to_roles = () => {
    history.push("/roles");
  };

  const redirect_to_addmed = () => {
    history.push("/addmed");
  };

  const redirect_to_supply = () => {
    history.push("/supply");
  };

  const redirect_to_track = () => {
    history.push("/track");
  };

  return (
    <div
      style={{
        backgroundImage: `url('./bg.jpg')`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <style>
        {`
          .step-container {
            display: flex;
            margin-bottom: 20px;
          }

          .step {
            padding: 40px;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: background-color 0.3s ease;
          }

          .step-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .step:hover {
            background-color: white;
          }

          .btn-step {
            border: 1px solid #ddd;
            margin-top: 10px;
            transition: background-color 0.3s ease;
          }

          .btn-step:hover {
            background-color: blue;
            border-color: #007bff; /* Change border color on hover */
          }

          .track-container {
            margin-top: 30px;
            transition: background-color 0.3s ease;
          }

          .track-container:hover {
            background-color: white;
          }

          .btn-track {
            border: 1px solid #ddd;
            margin-top: 20px;
            margin-bottom: 20px;
            transition: background-color 0.3s ease;
          }

          .btn-track:hover {
            background-color: blue;
            border-color: #007bff; /* Change border color on hover */
          }
        `}
      </style>
      <span style={{ color: "red" }}>
        <h3>
          <center>Supply Chain Flow</center>
        </h3>
        <br />

        <div className="container">
          {/* Each step in a separate horizontal grid */}
          <div className="step-container">
            <div className="step" onClick={redirect_to_roles}>
              <div className="step-content">
                <h5>
                  <center>Step 1</center>
                  <center>
                    {" "}
                    Owner Should Register Raw material suppliers, Manufacturers,
                    Distributors and Retailers
                  </center>
                </h5>
                <h6>
                  <center>
                    (Note: This is a one-time step. Skip to step 2 if already
                    done)
                  </center>
                </h6>
              </div>
              <center>
                <button
                  onClick={redirect_to_roles}
                  className="btn btn-outline-primary btn-sm btn-step"
                >
                  <center>Register</center>
                </button>
              </center>
            </div>

            <div className="step" onClick={redirect_to_addmed}>
              <div className="step-content">
                <h5>
                  <center>Step 2</center>
                  <center>Owner should order products</center>
                </h5>
              </div>
              <center>
                <button
                  onClick={redirect_to_addmed}
                  className="btn btn-outline-primary btn-sm btn-step"
                >
                  <center>Order Products</center>
                </button>
              </center>
            </div>

            <div className="step" onClick={redirect_to_supply}>
              <div className="step-content">
                <h5>
                  <center>Step 3</center>
                  <center> Control Supply Chain</center>
                </h5>
              </div>
              <center>
                <button
                  onClick={redirect_to_supply}
                  className="btn btn-outline-primary btn-sm btn-step"
                >
                  <center>Control Supply Chain</center>
                </button>
              </center>
            </div>
          </div>
          {/* One-fourth of the bottom portion */}
          <div className="row track-container">
            <div className="col-md-12">
              <h5 style={{ marginBottom: "20px", marginTop: "20px" }}>
                <center>Track the products</center>
              </h5>
              <center>
                <button
                  onClick={redirect_to_track}
                  className="btn btn-outline-primary btn-sm btn-track"
                >
                  <center>Track Products</center>
                </button>
              </center>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Home;
