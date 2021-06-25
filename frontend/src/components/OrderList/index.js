import React from 'react'
import './styles.css'
import OrderList from './OrderList'
import {  orders } from './data'

function OrderListComponent() {
   return (
    <div className="container-order-list">
      <div className="order-list-title">
        {orders.length > 0 ?
          <OrderList orders={orders} /> :
          <h2>Não há orçamentos disponíveis</h2>
        }
      </div>
    </div>
  )
}
export default OrderListComponent
