import React from "react";
import img from "../image/img1.png";
import { Container, Row, Col } from "react-bootstrap";


var col1 = {
  image: "img1",
};



export default function Two() {
  return (

    <div>
      <Container fluid>
        <Row><Col>
        <br></br>
      <h5 class="text-primary">
        ZED TICKET - Fill Information /Issue Point / Delivery Point :{" "}
      </h5>

      <form>
        <div className="col-xs-4 col-md-3">
          <p>
            Select Issue Point:
            <select className="form-select">
              <option value="issue point">Select Issue Point</option>
              <option>Che 1</option>
              <option>Che 2</option>
              <option>Che 3</option>
            </select>
          </p>
        </div>

        <div className="form-group col-xs-4 col-md-3">
          <label for="name" className="control-label">
            Office Ext:
          </label>
          <input type="text" className="form-control" placeholder="Exe" />
        </div>
        <div className="form-group col-xs-4 col-md-3">
          <label for="name" className="control-label">
            Home Tel:
          </label>
          <input type="text" className="form-control" placeholder="Tel" />
        </div>
        <div className="form-group col-xs-4 col-md-3">
          <label for="name" className="control-label">
            Locker No:
          </label>
          <input type="text" className="form-control" placeholder="Locker No" />
        </div>
      </form></Col>
      <Col sm={6} style={col1}>
            <img src={img} height={200} width={300} alt="image1" />
          </Col>
        </Row>
      </Container>
      <div class="text-center">
  <button type="button" class="btn btn-primary"> Next Page</button>
</div>
      
    </div>
  );
}
