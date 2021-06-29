import React  from "react";
import { Link } from 'react-router-dom'
import "./styles.css";

const Pagination = ({ pages }) => {
  const createPages = () => {
    let rows = [];
    for (let i = 1; i <= pages; i++) {
      rows.push(<Link to={`/orcamentos?page=${i}`}>{i}</Link>);
    }
    return rows;
  };
  return (
    <div className="paginator-container">      
      {createPages()}
    </div>
  );
};
export default Pagination;
