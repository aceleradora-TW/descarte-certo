import React from 'react'
import './styles.css'
import TableOrderList from './TableOrderList'
import { data } from './data'

function OrderListComponent() {
  return (
    <div className="container-order-list">
      <div className="order-list-title">
        <TableOrderList orders={data} />
      </div>
    </div>
  )
}
export default OrderListComponent