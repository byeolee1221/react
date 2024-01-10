import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data";
import DetailPage from './Routes/detail';
import AboutPage from './Routes/About';
import EventPage from './Routes/Event';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, Navigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Product = (props) => {
  return (
    <Col>
      <button className="detail-btn">
        <Link to="/detail">
          <img
            src={`https://codingapple1.github.io/shop/shoes${props.imgNum}.jpg`}
            width="80%"
          />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </Link>
      </button>
    </Col>
  );
}

function App() {
  const [shoes, setShoes] = useState(data);

  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">풍뎅이몰</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">메인페이지</Link>
            <Link to="/menu">메뉴</Link>
            <Link to="/price">가격</Link>
            <button onClick={() => { navigate("/event") }}>이벤트</button>
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
      <Routes>
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>

        {/* <Route path="*" element={<div>없는 페이지입니다.</div>} /> */}
      </Routes>
    </div>
  );
}

export default App;
