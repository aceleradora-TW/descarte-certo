import React from 'react'
import './styles.css'
function Tabela({orders}) {
    
    return (
        <>
            <table className="content-table" id="emp-table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>email</th>
                        <th>Quantidade</th>
                        <th>Material</th>
                        <th>Acesso</th>
                        <th>Região</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.creationDate}</td>
                            <td>{order.requester.fullName}</td>
                            <td>{order.requester.cellphone}</td>
                            <td>{order.requester.email}</td>
                            <td>{order.residue.residueMeasure}</td>
                            <td>{order.residue.residueType}</td>
                            <td>{order.residueAddress.locationInfo}</td>
                            <td>{order.residueAddress.region}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Tabela