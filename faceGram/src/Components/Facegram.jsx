import axios from "axios";
import React from "react";
import Toast from "react-bootstrap/Toast";
import { useEffect } from "react";
import { useState } from "react";
import './Facegram.css'

function ContextualExample() {
  const [tabledata, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:4000/api/groups").then((res) => {
        setData(res.data["data"]);
        setCount(Math.ceil(tabledata.length / 3));
        setFilterdata(res.data["data"]);
        console.log(tabledata[0].name);
      });
    } catch (error) {
      console.log(error);
    }
  }, [tabledata.length]);

  function handleClick(event){
   let name = event.target.getAttribute("data-name");
   console.log(name)
  }

  return (
    <>
      {tabledata.map((row,idx) => (
        <div className="d-inline-block mar">
        <Toast className="grps mar">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto"> <button href="" data-name={row.name} onClick={handleClick}>{row.name}</button></strong>
            <small>{row.category}</small>
            
          </Toast.Header>
          <Toast.Body>{row.description}</Toast.Body>
        </Toast>
        </div>
      ))}
    </>
  );
}

export default ContextualExample;
