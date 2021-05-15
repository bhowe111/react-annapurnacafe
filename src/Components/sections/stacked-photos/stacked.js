import React from "react";
import "./stacked.css";
import { Container, Row, Col } from "reactstrap";
import rest from "../../../Assets/images/stacked/rest.jpg";
import rest1 from "../../../Assets/images/stacked/rest1.jpg";
import rest2 from "../../../Assets/images/stacked/rest2.jpg";
import rest3 from "../../../Assets/images/stacked/rest3.jpg";

const stacked = () => {
  return (
    <div className="stacked-container">
      <p className="stackedTop">GALLERY</p>
      <Container>
        <Row>
          <Col>
            <div className="stacked">
              <img src={rest1} alt="Stacked for restaurant!" />
            </div>
          </Col>
          <Col>
            <div className="stacked">
              <img src={rest} alt="Stacked for restaurant!" />
            </div>
          </Col>
          <Col>
            <div className="stacked">
              <img src={rest2} alt="Stacked for restaurant!" />
            </div>
          </Col>
          <Col>
            <div className="stacked">
              <img src={rest3} alt="Stacked for restaurant!" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default stacked;
