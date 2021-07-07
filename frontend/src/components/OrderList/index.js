import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { Nav } from "react-bootstrap";
import IconBack from "../images/iconevoltar.png";
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import Preload from '../Preload/Preload'
import Tabela from  './TabelaOrcamento'



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
    axios
      .get(`/estimate/all?page=${currentPage}`)
      .then((res) => {
        setOrders(res.data.content);
        setCurrentPage(res.data.number + 1)
        setTotalElements(res.data.totalElements)
        setOrdersPerPage(res.data.size)
        setLoading(true)
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
                  <div className="btn-wrapper">
                    <button className="btn-pagination" onClick={firstPage}>Primeira Página</button>
                    <button className="btn-pagination" onClick={prevPage}>Anterior</button>
                    <button className="btn-pagination" onClick={nextPage}>Próximo</button>
                    <button className="btn-pagination" onClick={lastPage}>Última Página</button>
                  </div>
              </>
            )}
        </div>
      </div>
    </>
  );
}
export default OrderListComponent;