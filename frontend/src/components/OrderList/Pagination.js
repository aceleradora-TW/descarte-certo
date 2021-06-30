import React  from "react";
import { Link } from 'react-router-dom'
import "./styles.css";

const Pagination = ({ pages }) => {
  const createPages = () => {
    let rows = [];
    for (let i = 1; i <= pages; i++) {
      rows.push(<Link onClick={()=>{}}to={`/orcamentos?page=${i-1}`}>{i}</Link>);
    }
    return rows;
  };

  // const totalpages 
  // const currentPage
  return (
    <div className="paginator-container">      
      {createPages()}
    </div>
  );
};
export default Pagination;
