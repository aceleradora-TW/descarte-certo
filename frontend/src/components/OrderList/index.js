import React from 'react'
import './styles.css'
import TableOrderList from './TableOrderList'
import { paginator, orders } from './data'
import Pagination from './Pagination'

function OrderListComponent() {
   return (
    <div className="container-order-list">
      <div className="order-list-title">
        {orders.length > 0 ?
          <TableOrderList orders={orders} /> :
          <h2>Não há orçamentos disponíveis</h2>
        }
        <Pagination qtdPaginas={paginator.qtdPaginas} />
      </div>
    </div>
  )
}
export default OrderListComponent
