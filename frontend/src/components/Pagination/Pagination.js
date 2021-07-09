import React from 'react'
// import {findAllOrders} from '../OrderList/index'

function Pagination(currentPage,totalElements,ordersPerPage) {

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
    return(
        <div className="btn-wrapper">
            <button className="btn-pagination" onClick={firstPage}>Primeira Página</button>
            <button className="btn-pagination" onClick={prevPage}>Anterior</button>
            <button className="btn-pagination" onClick={nextPage}>Próximo</button>
            <button className="btn-pagination" onClick={lastPage}>Última Página</button>
        </div>

    )
}

export default Pagination