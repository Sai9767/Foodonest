import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardGroup,
  MDBBtn
} from "mdb-react-ui-kit";
import "./card.css"
//import { Link } from "react-router-dom";

const CardFood = ({ imageFile, quantity,Address, title, tags, _id, name }) => {
  

  return (
    <MDBCardGroup>
      <MDBCard className="h-100 mt-2 d-sm-flex" style={{ maxWidth: "20rem" }}>
        <MDBCardImage
          src={imageFile}
          alt={title}
          position="top"
          style={{ maxWidth: "100%", height: "180px" }}/>
        <div className="top-left">{name}</div>
        <span className="text-start tag-card">
          {tags.map((item) => `#${item} `)}
        </span>
        <MDBCardBody>
          <MDBCardTitle className="text-start">{title}</MDBCardTitle>
          <MDBCardText className="text-start">
            {(quantity)}
          </MDBCardText>
          <MDBCardText className="text-start">
           {(Address)}
          </MDBCardText>
          <MDBBtn >
                Conform
          </MDBBtn>
          <MDBBtn className="help">
                help
              </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
};

export default CardFood;