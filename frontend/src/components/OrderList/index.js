import React from 'react'
import './OrderList.css'
import TableOrderList from './TableList'
import TableOrder from './Teste'

const data = [{
        transporte: 'caçamba',
        cep: '94820-450',
        material: 'Madeira',
        nome: 'João Silva',
        data: '10/03/2021',
        quantidade: '2'
    }, {
        transporte: 'sacos',
        cep: '94820-450',
        material: 'Madeira',
        nome: 'Roberto Medeiros',
        data: '24/05/2021',
        quantidade: '43'
    }]

function OrderListComponent() {
    return (
        <div className="container-order-list">
            <div className="order-list-title">
                <h1>Lista de orçamentos</h1>
                <TableOrderList infos={data} />
                {/* <TableOrder/> */}
            </div>
        </div>
    )
}
export default OrderListComponent