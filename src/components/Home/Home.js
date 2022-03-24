import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/features/foodSlice.js";
import CardFood from "../CardFood";
import "./Home.css"

const Home = () => {
   const { foods, loading } = useSelector((state) => ({ ...state.food }));
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [])

  if (loading) {
    return <h2>Loading..</h2>
  }
  return (
    <div className="back">
    <div //inline styling
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}>
      <MDBRow className="mt-5">
        {foods.length === 0 && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No foods Found
          </MDBTypography>
        )}

        <MDBCol>
          <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-3 g-2">
              {foods &&
                foods.map((item, index) => <CardFood key={index}{...item}/>)}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </div>
    </div>
  );
};

export default Home;