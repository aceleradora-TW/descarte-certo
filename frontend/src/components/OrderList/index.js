import React, { useState } from "react";
import "./styles.css";
import OrderList from "./OrderList";
import axios from "axios";
import { Nav } from "react-bootstrap";
import IconBack from "../images/iconevoltar.png";



const OrderListComponent = () => {
  const [orders, setOrders] = useState("");
      
      
  axios
    .get(`https://descartecerto.herokuapp.com/estimate/all`)
    .then((res) => {
        setOrders(res.data.content);
        
      })  

  return (
  <>
  <Nav.Link href="/">
        <img alt="userIcone" className="imgIcons" src={IconBack}></img>
      </Nav.Link>
      
    <div className="container-order-list">
      <div className="order-list-title">
        {orders.length > 0 
        ? (
        <OrderList orders={orders} />)
        : (
          <h2>Não há orçamentos disponíveis</h2>
        )}
      </div>
    </div>
    </>
  );
}
export default OrderListComponent;
