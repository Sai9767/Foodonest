import React, { useState,useEffect} from "react";
import { MDBCard, MDBCardBody, MDBValidation,MDBBtn,MDBInput} from "mdb-react-ui-kit";
//import Chip from '@material-ui/core/chip';
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createFood } from "../../redux/features/foodSlice.js"; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AddFood.css"
//import { yellow } from "@mui/material/colors";


const initialState = {
  title: "",
  quantity: "",
  Address:"",
  tags: [],
};
const AddEditFood = () => {
  const [foodData, setFoodData] = useState(initialState);
  const { error } = useSelector((state) => ({ ...state.food}));
 //const { user } = useSelector((state) => ({ ...state.auth }));
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title,quantity,Address } = foodData;

  useEffect(()=>{
    error&& toast.error(error); 
  },[error]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && quantity && Address) {
      const updatedFoodData = { ...foodData };
        dispatch(createFood({ updatedFoodData, navigate, toast }));     
        
        handleClear();
    }
    
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };
  
  const handleClear = () => {
    setFoodData({ title: "", quantity: "", Address:"" });  
  };
  return (
    <div className="back">
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
       
        
      }}
      className="container">
      <MDBCard alignment="center">
        <h5>Add Food</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Name"
                type="text"
                value={title}
                name="title"
                 onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide Name"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
              
                placeholder="Enter quantity"
                type="text"
                value={quantity}
                name="quantity"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide quantity"
              />
            </div>
            
            <div className="cal-md-23">
              <MDBInput
                placeholder="Enter Address"
                type="text"
                value={Address}
                name="Address"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide Address"
              />
              </div>
            
            <div className="d-flex justify-content-start">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setFoodData({ ...foodData, imageFile: base64 })}/>
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }}>
                Submit
              </MDBBtn>
              <MDBBtn
                style={{ width: "100%" }}
                className="mt-2"
                color="danger"
                onClick={handleClear}
              >
                Clear
              </MDBBtn>
            </div>
          </MDBValidation>
          </MDBCardBody>
      </MDBCard>
    </div>
    </div>
  );
};

export default AddEditFood;