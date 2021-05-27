import React from 'react'
import './styles.css'

const TableOrderList = ({ orders }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CEP</th>
          <th>Data</th>
          <th>Material</th>
          <th>Tipo de Transporte</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr>
            <td>{order.nome}</td>
            <td>{order.cep}</td>
            <td>{order.data}</td>
            <td>{order.material}</td>
            <td>{order.transporte}</td>
            <td>{order.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default TableOrderList