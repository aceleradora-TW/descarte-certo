import React, { useState, useEffect } from "react";
import "./styles.css";
import OrderList from "./OrderList";
import axios from "axios";
//import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";

function OrderListComponent() {
  const [orders, setOrders] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const ordersPerPage = 2;
  const pagesVisited = pageNumber * ordersPerPage;

  axios
    .get("https://descartecerto.herokuapp.com/estimate/all?totalPage=2")
    .then((res) => {
      console.log(res.data.content);
      setOrders(res.data.content);
      setPageNumber(res.data.pageSize);
    });

  const pageCount = Math.ceil(orders.length / ordersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container-order-list">
      <div className="order-list-title">
        {orders.length > 0 ? (
          <>
            <OrderList orders={orders} />
            {/* <Pagination totalPages={pageNumber} /> */}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"PaginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeLinkClassName={"paginationActive"}
            />
          </>
        ) : (
          <h2>Não há orçamentos disponíveis</h2>
        )}
      </div>
    </div>
  );
}
export default OrderListComponent;
