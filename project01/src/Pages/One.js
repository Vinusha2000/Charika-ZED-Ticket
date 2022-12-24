import React from "react";
import img from "../image/img2.jpg";
import { Container, Row, Col } from "react-bootstrap";

var col1 = {
  image: "img2",
};

export default function One() {
  return (
    <div>
      <br></br>
      <h5 class="text-primary">ZED Ticket- Passengers and Travel Types :</h5>

      <Container fluid>
        <Row>
          <Col >
            <lable>Is Self Travelling?</lable><br></br>
            <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
  <label class="form-check-label" for="exampleRadios1">
    Yes
  </label></div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked></input>
  <label class="form-check-label" for="exampleRadios2">
    No
  </label>
</div>

          
            
            <lable>Is Dep/Travel Partner Travelling?  </lable>
   <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" checked></input>
  <label class="form-check-label" for="exampleRadios3">
    Yes
  </label></div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" checked></input>
  <label class="form-check-label" for="exampleRadios4">
    No
  </label>
</div>



            <h6>
              <b>Dependant/Traval Partner</b>
            </h6>

            <div className="col-xs-4 col-md-4" text="center">
              <select className="form-select">
                <option value="select dependant">Select Dependant</option>
                <option>Partner</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Child1</option>
                <option>Child2</option>
                <option>Child3</option>
              </select>

              <select className="form-select">
                <option value="select dependant">Select Dependant</option>
                <option>Partner</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Child1</option>
                <option>Child2</option>
                <option>Child3</option>
              </select>

              <select className="form-select">
                <option value="select dependant">Select Dependant</option>
                <option>Partner</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Child1</option>
                <option>Child2</option>
                <option>Child3</option>
              </select>

              <select className="form-select">
                <option value="select dependant">Select Dependant</option>
                <option>Partner</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Child1</option>
                <option>Child2</option>
                <option>Child3</option>
              </select>

              <select className="form-select">
                <option value="select dependant">Select Dependant</option>
                <option>Partner</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Child1</option>
                <option>Child2</option>
                <option>Child3</option>
              </select>

              <select className="form-select">
                <option value="select dependant">Select Dependant</option>
                <option>Partner</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Child1</option>
                <option>Child2</option>
                <option>Child3</option>
              </select>
            </div>
          </Col>
          <Col sm={6} style={col1}>
            <img src={img} height={200} width={300} alt="image1" />
          </Col>
        </Row>
      </Container>
      <br></br>

      
      <div class="text-center">
  <button type="button" class="btn btn-primary"> Next Page</button>
</div>
    
    </div>

    
  );
}
