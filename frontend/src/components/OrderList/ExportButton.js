import React from "react";
import ReactExport from "react-export-excel";
import { orders } from "./data";
import OrderList from "./OrderList";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Export() {
    return (<>
        <div className="table-render">
            {orders.length > 0 ?
                <OrderList orders={orders} key={orders.id}/>
                :
                <h2>Não há orçamentos disponíveis</h2>
            }   
        <div className="export-button">
            <ExcelFile>
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
        </div>
       </>
    );
}

export default Export;