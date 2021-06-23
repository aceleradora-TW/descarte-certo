import React from 'react'
import './styles.css'

const OrderList = ({ orders }) => {
  return (
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
            <td>{order.requester.fullName}</td>
            <td>{order.requester.cellphone}</td>
            <td>{order.requester.email}</td>
            <td>{order.residue.residueMeasure}</td>
            <td></td>         
            <td>{order.residue.residueType}</td>            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default OrderList