import React from 'react'
import './styles.css'

const Pagination = ({ totalPages }) => {
  const createPages = qtValue => {
    let rows = []
    for (let i = 1; i <= qtValue; i++) {
      rows.push(<a href="/#">{i}</a>)
    }
    return rows
  }
  return (
    <div className="paginator-container">
      <a href="/#">&laquo;</a>
      {createPages(totalPages)}
      <a href="/#">&raquo;</a>
    </div>
    
  )
}
export default Pagination