import React from "react"
import ReactExport from "react-export-excel"
import { orders } from "./data"
import './styles.css'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class ExportAll extends React.Component{
    render() {
        return (
                <ExcelFile element={<button className="export-all">Exportar todos</button>}>
                    <ExcelSheet data={orders} name="orçamentos">
                        <ExcelColumn label="Nome" value="fullName" />
                        <ExcelColumn label="Telefone" value="cellphone" />
                        <ExcelColumn label="Email" value="email" />
                        <ExcelColumn label="Quantidade" value="quantity" />
                        <ExcelColumn label="Tipo de coleta" value="residueMeasure" />
                        <ExcelColumn label="Material" value="residueType" />
                        <ExcelColumn label="Acesso" value="..." />
                        <ExcelColumn label="Região" value="..." />
                        <ExcelColumn label="Data" value="..." />   
                        <ExcelColumn label="Status" value="status" />  
                    </ExcelSheet>
                </ExcelFile>
        );
    }
}

export default ExportAll;