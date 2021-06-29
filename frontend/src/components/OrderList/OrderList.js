import React from 'react'
import './styles.css'
import ExportAll from './ExportButton'

const OrderList = ({ orders }) => {
  return (<>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>email</th>
          <th>Tipo de coleta</th>
          <th>Quantidade</th>
          <th>Mateirial</th>
          <th>Acesso</th>
          <th>Região</th>
          <th>Data</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr>
            <td>{order.fullName}</td>
            <td>{order.cellphone}</td>
            <td>{order.email}</td>
            <td>{order.residueMeasure}</td>
            <td>{order.quantity}</td>         
            <td>{order.residueType}</td>            
            <td></td>
            <td></td>
            <td></td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="export-button">
      <ExportAll/>
    </div>
    </>
  )
}
export default OrderList