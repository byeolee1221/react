import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data";
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Product = (props) => {
  return (
    <Col>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.imgNum}.jpg`}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">풍뎅이몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">메인페이지</Nav.Link>
            <Nav.Link href="#features">메뉴</Nav.Link>
            <Nav.Link href="#pricing">가격</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg">
        
      </div>
      <div className="product-box">
        <Container>
          <Row>
              {shoes.map((item, i) => {
                return (
                  <Product shoes={item} imgNum={i+1} />
                  );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
