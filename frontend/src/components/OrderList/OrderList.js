import React from 'react'
import './styles.css'

import ReactExport from "react-export-excel"

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

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
    <div className="export-button">
            <ExcelFile element={<button className="export-all">Exportar</button>}>
                <ExcelSheet data={orders} name="orçamentos">
                    <ExcelColumn label="Nome" value="fullName" />
                    <ExcelColumn label="Telefone" value="cellphone" />
                    <ExcelColumn label="Email" value="email" />
                    <ExcelColumn label="Tipo de Coleta" value="..." />
                    <ExcelColumn label="Quantidade" value="..." />
                    <ExcelColumn label="Material" value="residueType" />
                    <ExcelColumn label="Acesso" value="..." />
                    <ExcelColumn label="Região" value="..." />
                    <ExcelColumn label="Data" value="..." />   
                    <ExcelColumn label="Status" value="..." />  
                </ExcelSheet>
            </ExcelFile>
      </div>

    </>
  )
}
export default OrderList