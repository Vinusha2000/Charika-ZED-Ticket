import React from 'react'
import { Container,Row,Col } from "react-bootstrap";


var col1 = {
  backgroundColor:"red"
}

var col2 = {
  backgroundColor:"yellow"
}

var col3 = {
  backgroundColor:"green"
}
export default function asdkfnvibvirbv() {
  return (
  <Container fluid>
    <Row>
      <Col sm={1} style={col1}>
        <p>Muthu</p>
      </Col>
      <Col sm={4} style={col2}>
        <h1>Sameera</h1>
      </Col>
      <Col sm={7} style={col3}>
        <h4>SLIIT</h4>
      </Col>
    </Row>
  </Container>

  )
}
