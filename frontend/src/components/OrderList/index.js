import React, { useState, useEffect } from "react";
import "./styles.css";
import { get } from "../../services/client";
import { Nav } from "react-bootstrap";
import IconBack from "../images/iconevoltar.png";
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import Preload from '../Preload/Preload'
import Tabela from  './TabelaOrcamento'
import Pagination from "../Pagination/Pagination";



const OrderListComponent = () => {

  const [orders, setOrders] = useState([]);
  const [ordersPerPage, setOrdersPerPage] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [totalElements, setTotalElements] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      findAllOrders(currentPage)
    })
  }, [])

  const findAllOrders = (currentPage) => {
    currentPage -= 1
    get(`/estimate/all?page=${currentPage}`)
      .then((res) => {
        setOrders(res.content);
        setCurrentPage(res.number + 1)
        setTotalElements(res.totalElements)
        setOrdersPerPage(res.data.size)
        setLoading(true)
      })
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
          {!loading ? (
            <Preload/>
          )
            : (
              <>
                <Tabela orders={orders}/>                  
                  <div className="btn-excel-wrapper">
                    <ReactHTMLTableToExcel
                      className="btn-export"
                      table="emp-table"
                      filename="5Marias Orcamento Excel file"
                      sheet="Sheet"
                      buttonText="Exportar Excel"
                    />
                  </div>
                  <Pagination
                  currentPage={currentPage}
                  totalElements={totalElements}
                  ordersPerPage={ordersPerPage}
                  onClick={findAllOrders}
                  />
              </>
            )}
        </div>
      </div>
    </>
  );
}
export default OrderListComponent;
