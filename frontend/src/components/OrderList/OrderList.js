import React from "react";
import "./styles.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import axios from 'axios';

const OrderList = ({ orders }) => {
  const [order, setOrder] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(orders.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
  return (<>
    <table className="content-table">
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
        {orders.slice(pagesVisited, pagesVisited + usersPerPage)
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
