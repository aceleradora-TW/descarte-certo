import React, { useState, useEffect } from "react";
import "./styles.css";
import OrderList from "./OrderList";
import axios from "axios";
import Pagination from "./Pagination";
// import ReactPaginate from "react-paginate";

function OrderListComponent() {


  const [orders, setOrders] = useState("");
  let [pageNumber, setPageNumber] = useState(0);
  


  useEffect(() => {
    const url = new URL(window.location.href.replace("/#",""))
    const page = url.searchParams.get("page")
    
    axios
      .get(`https://descartecerto.herokuapp.com/estimate/all?page=${page}&totalPage=1`)
      .then((res) => {
        setOrders(res.data.content);
        setPageNumber(res.data.totalPages);
      });

  }, [pageNumber])

  

  return (
    <div className="container-order-list">
      <div className="order-list-title">
        {orders.length > 0 ? (
          <>
            <OrderList orders={orders} />
            <Pagination totalPages={pageNumber} />
            {/* <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"PaginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeLinkClassName={"paginationActive"}
            /> */}
          </>
        ) : (
          <h2>Não há orçamentos disponíveis</h2>
        )}
      </div>
    </div>
  );
}
export default OrderListComponent;
