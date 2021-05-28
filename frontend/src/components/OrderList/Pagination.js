import React from 'react'
import './styles.css'

const Pagination = ({ qtdPaginas }) => {
  const createPages = qtd => {
    let rows = []
    for (let i = 1; i <= qtd; i++) {
      rows.push(<a href="#">{i}</a>)
    }
    return rows
  }
  return (
    <div className="paginator-container">
      <a href="#">&laquo;</a>
      {createPages(qtdPaginas)}
      <a href="#">&raquo;</a>
    </div>
    
  )
}
export default Pagination