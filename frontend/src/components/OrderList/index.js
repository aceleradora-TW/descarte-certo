import React from 'react'
import './styles.css'
import OrderList from './OrderList'
import { paginator, orders } from './data'
import Pagination from './Pagination'

function OrderListComponent() {
   return (
    <div className="container-order-list">
      <div className="order-list-title">
        {orders.length > 0 ?
          <OrderList orders={orders} /> :
          <h2>Não há orçamentos disponíveis</h2>
        }
        <Pagination totalPages={paginator.totalPages} />
      </div>
    </div>
  )
}
export default OrderListComponent
