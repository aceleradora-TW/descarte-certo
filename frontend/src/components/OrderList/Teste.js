import React from 'react'
import { Fragment } from 'react'
import './OrderList.css'


const orders = require("./orders")

const TableOrder = () => {
    const dataImport = orders[0]
    function renderInfos(){
        let subHeaders = []
        let subs = Object.values(dataImport)

        subs.map((x, i) => {
            if(subs[i] !== undefined){
                Object.keys(subs[i]).map(y => {
                    subHeaders.push(<td>[y]</td>)
                    return subHeaders
                })
            }
            return subHeaders
        })
        return subHeaders
    }

    return(
        <Fragment>
            <table>
            <thead>
                <tr>Nome</tr>
                <tr>Data</tr>
                <tr>Cep</tr>
                <tr>Material</tr>
                <tr>Quantidade</tr>
                <tr>Tipo de transporte</tr>
            </thead>
            <tbody>
                <td>{renderInfos()}</td>
            </tbody>
        </table>
        </Fragment>
    )
}
export default TableOrder