import React from "react";
import "./Registration.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState } from "react";

function Registration() {

  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [cpass,setCpass]=useState("");
  // const [con,setCon]=useState(false);

  function getFormdata(e) {
    console.log(fname,lname,email,pass,cpass);
    e.preventDefault();
  }
  return (
    <div className="container">
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your business
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">


{/* ----------------------// form here //----------------------------- */}


                <form onSubmit={getFormdata}>
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                      onChange={(e)=>setFname(e.target.value)}
                        wrapperClass="mb-4"
                        label="First name"
                        id="form1"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                      onChange={(e)=>setLname(e.target.value)}
                        wrapperClass="mb-4"
                        label="Last name"
                        id="form2"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                  onChange={(e)=>setEmail(e.target.value)}
                    wrapperClass="mb-4"
                    label="Email"
                    id="form3"
                    type="email"
                  />
                  <MDBInput
                  onChange={(e)=>setPass(e.target.value)}
                    wrapperClass="mb-4"
                    label="Password"
                    id="form4"
                    type="password"
                  />
                  <MDBInput
                  onChange={(e)=>setCpass(e.target.value)}
                    wrapperClass="mb-4"
                    label="Confirm-Password"
                    id="form4"
                    type="password"
                  />

                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                    // onChange={(e)=>setCon(e.target.value)}
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn type="submit" className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn>
   </form>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Registration;
