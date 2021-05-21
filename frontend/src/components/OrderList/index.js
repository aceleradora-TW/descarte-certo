import React from 'react'
import './OrderList.css'
import TableList from './TableList'


function OrderListComponent(){
    return(
         <div id="Orders" classname="container-OrderList">
            <div classname="OrderList-title">
                <h1>Lista de orçamentos</h1>
                <TableList />
            </div>



        </div>
    )
}

export default OrderListComponent