import React, { useState,useEffect} from "react";
import { MDBCard, MDBCardBody, MDBValidation,MDBBtn,MDBInput} from "mdb-react-ui-kit";
//import Chip from '@material-ui/core/chip';
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createFood } from "../../redux/features/foodSlice.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AddFood.css"


const initialState = {
  title: "",
  description: "",
  tags: [],
};
const AddEditFood = () => {
  const [foodData, setFoodData] = useState(initialState);
  const { error,loading } = useSelector((state) => ({ ...state.food}));
 //const { user } = useSelector((state) => ({ ...state.auth }));
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, description, tags } = foodData;

  useEffect(()=>{
    error&& toast.error(error); 
  },[error]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && tags) {
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
    setFoodData({ title: "", description: "", tags: [] });  
  };
  return (
    <div className="back">
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
      className="container">
      <MDBCard alignment="center">
        <h5>Add Food</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Title"
                type="text"
                value={title}
                name="title"
                 onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide title"
              />
            </div>
            <div className="col-md-12">
              <textarea
                placeholder="Enter Description"
                type="text"
                style={{height:"100px"}}
                value={description}
                name="description"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                textarea
                rows={4}
                validation="Please provide description"
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