import React from "react";
import "./Login.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useState } from "react";

function Login() {
  const History = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function getData(e) {
    getApi();
    e.preventDefault();
  }

  async function getApi() {
    try {
      axios
        .post("http://localhost:4000/api/login", { email: email, pass: pass })
        .then((res) => {
          if (res.status === 200)
            swal(
              "Good job!",
              "You are Logged In Successfully!",
              "success"
            )
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <MDBContainer fluid className="p-3 my-5 container">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <form onSubmit={getData}>
              <MDBInput
                onChange={(e) => setEmail(e.target.value)}
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                onChange={(e) => setPass(e.target.value)}
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" size="lg">
                Sign in
              </MDBBtn>
            </form>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#3b5998" }}
            >
              <MDBIcon fab icon="facebook-f" className="mx-2" />
              Continue with facebook
            </MDBBtn>

            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#55acee" }}
            >
              <MDBIcon fab icon="twitter" className="mx-2" />
              Continue with twitter
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
