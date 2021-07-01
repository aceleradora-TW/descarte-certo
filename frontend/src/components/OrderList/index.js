import React, { useState } from "react";
import "./styles.css";
import OrderList from "./OrderList";
import axios from "axios";
// import NavBarComponent from '../NavBar/index'


const OrderListComponent = () => {
  const [orders, setOrders] = useState("");
  const [pageNumber, setPageNumber] = useState(0);    
      
  axios
    .get(`https://descartecerto.herokuapp.com/estimate/all`)
    .then((res) => {
        setOrders(res.data.content);
        setPageNumber(res.data.totalPages);
      })  

  return (
    <>
    
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
