import React from 'react'
import './OrderList.css'

function TableOrderList({ infos }) {
    return (
        <table>
            <tr>
                <th>Nome</th>
                <th>Data</th>
                <th>Cep</th>
                <th>Material</th>
                <th>Quantidade</th>
                <th>Tipo de transporte</th>
            </tr>
            {infos.map(info => (<tr>
                <td>{info.nome}</td>
                <td>{info.data}</td>
                <td>{info.cep}</td>
                <td>{info.material}</td>
                <td>{info.quantidade}</td>
                <td>{info.transporte}</td>
            </tr>))}
        </table>

    )
}
export default TableOrderList