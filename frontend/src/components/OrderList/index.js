import React, { useState, useEffect } from "react";
import "./styles.css";
import OrderList from "./OrderList";
//import { orders } from "./data";
import axios from "axios";

function OrderListComponent() {
  const [orders, setOrders] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  /*
  const ordersPerPage = 2;
  const pagesVisited = pageNumber * ordersPerPage;
  const displayOrders = orders
    .slice(pagesVisited + ordersPerPage)
    .map((order) => {
      return (
        <div>
          <h3>{order.data.content.id}</h3>
        </div>
      );
    });*/

  const api = () => {
    axios
      .get("https://descartecerto.herokuapp.com/estimate/all")
      .then((res) => {
        console.log(res.data.content);
        setOrders(res.data.content);
      });
  };

  return (
    <div className="container-order-list">
      <div className="order-list-title">
        {orders.length > 0 ? (
          <OrderList orders={orders} />
        ) : (
          <h2>Não há orçamentos disponíveis</h2>
        )}
      </div>
      <button onClick={api}>testando a diaba</button>
    </div>
  );
}
export default OrderListComponent;
