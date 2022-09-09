import React, { useState } from "react";
import "./Add.css";
import swal from "sweetalert";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBTextArea,
} from "mdb-react-ui-kit";

function Add() {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  function getData(e) {
    sendData();
    // console.log(category,description,name);
    e.preventDefault();
  }


  async function sendData() {
    try {
      axios
        .post("http://localhost:4000/api/add", {name:name,category:category,description:description })
        .then((res) => {
            console.log(res.status)
          if (res.status === 200){
            swal(
              "Good job!",
              "Group Added Successfully!",
              "success"
            )}else{
              swal(
                "eroor",
                "Something Went Wrong",
                "error"
              )
            }
        });
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          
          

<form onSubmit={getData}>
<h2 className="text-uppercase text-center mb-5">Create an Group</h2>
            <MDBInput
              onChange={(e) => setName(e.target.value)}
              wrapperClass="mb-4"
              label="Group Name"
              size="lg"
              id="form1"
              type="text"
            />
            <MDBInput
              onChange={(e) => setCategory(e.target.value)}
              wrapperClass="mb-4"
              label="Categoury"
              size="lg"
              id="form1"
              type="text"
            />
            <MDBTextArea
              onChange={(e) => setDescription(e.target.value)}
              wrapperClass="mb-4"
              label="Description"
              id="textAreaExample"
              rows={4}
            />
            <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
            <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">
              Register
            </MDBBtn>
             
              

            </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Add;
