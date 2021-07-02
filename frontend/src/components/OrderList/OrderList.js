import React from "react";
import "./styles.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";

import ReactHTMLTableToExcel from 'react-html-table-to-excel'


const OrderList = ({ orders}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const ordersPerPage1 = 5
  console.log(orders)
  const pagesVisited = pageNumber * ordersPerPage1;
  const pageCount = Math.ceil(orders.length / ordersPerPage1)
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
  return (
  <>
    <table className="content-table" id="emp-table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>email</th>
          <th>Quantidade</th>
          <th>Material</th>
          <th>Acesso</th>
          <th>Região</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {orders.slice(pagesVisited, pagesVisited + ordersPerPage1)
        .map((order) => (
          <tr key={order.id}>
            <td>{order.creationDate}</td>
            <td>{order.requester.fullName}</td>
            <td>{order.requester.cellphone}</td>
            <td>{order.requester.email}</td>
            <td>{order.residue.residueMeasure}</td>
            <td>{order.residue.residueType}</td>
            <td>{order.residueAddress.locationInfo}</td>
            <td>{order.residueAddress.region}</td>
            <td>{order.status}</td>
          </tr>
        ))}        
      </tbody>      
    </table>
    <div className="btn-wrapper">
<ReactHTMLTableToExcel
className="btn-export"
table="emp-table"
filename="Emp Excel file"
sheet="Sheet"
buttonText="Export to Excel"
/>
</div>
      
    <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Próximo"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};
export default OrderList;
