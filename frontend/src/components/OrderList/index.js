import React, { useState, useEffect } from "react";
import "./styles.css";

import axios from "axios";
import { Nav } from "react-bootstrap";
import IconBack from "../images/iconevoltar.png";



const OrderListComponent = () => {
  const [orders, setOrders] = useState([]);
  const [ordersPerPage, setOrdersPerPage] = useState()
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalElements, setTotalElements] = useState()

  useEffect(() => {
    findAllOrders(currentPage)
  })

  const findAllOrders = (currentPage) => {
    currentPage -= 1
    axios
      .get(`https://descartecerto.herokuapp.com/estimate/all?page=${currentPage}`)
      .then((res) => {
        setOrders(res.data.content);
        setCurrentPage(res.data.number + 1)
        setTotalElements(res.data.totalElements)
        setOrdersPerPage(res.data.size)
      })
  }

  const firstPage = () => {
    if (currentPage > 1) {
      findAllOrders(1)
    }
  }

  const prevPage = () => {
    let prevPage = 1
    if (currentPage > 1) {
      findAllOrders(currentPage - prevPage)
    }
  }

  const lastPage = () => {
    let condition = Math.ceil(totalElements / ordersPerPage)
    if (currentPage < condition) {
      findAllOrders(condition)
    }
  }

  const nextPage = () => {
    if (currentPage < Math.ceil(totalElements / ordersPerPage)) {
      findAllOrders(currentPage + 1)
    }
  }


  return (
    <>
      <div className="btn-back">
        <Nav.Link href="/">
          <img alt="userIcone" className="imgIcons" src={IconBack}></img>
        </Nav.Link>
      </div>

      <div className="container-order-list">
        <div className="order-list-title">
          {orders.length > 0
            ? (
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
                  {orders.map((order) => (
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
                  <button className="btn-pagination" onClick={firstPage}>Primeira Página</button>
                  <button className="btn-pagination" onClick={prevPage}>Anterior</button>
                  <button className="btn-pagination" onClick={nextPage}>Próximo</button>
                  <button className="btn-pagination" onClick={lastPage}>Última Página</button>
             </div>
            </>
            )
            : (
              <h2>Não há orçamentos disponíveis</h2>
            )}
        </div>
      </div>
    </>
  );
}
export default OrderListComponent;
