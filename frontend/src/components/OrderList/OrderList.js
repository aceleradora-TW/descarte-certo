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
          <th>CEP</th>
          <th>Endereço</th>
          <th>Tipo do material</th>
          <th>Tipo de serviço</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr>
            <td>{order.requester.fullName}</td>
            <td>{order.requester.cellphone}</td>
            <td>{order.requester.email}</td>
            <td>{order.residueAddress.cep}</td>
            <td>{order.residueAddress.locationInfo}</td>
            <td>{order.residue.residueType}</td>
            <td>{order.residue.residueMeasure}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default OrderList