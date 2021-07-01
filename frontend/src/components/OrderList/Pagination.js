import React  from "react";
import { useHistory } from 'react-router-dom'
import "./styles.css";

const Pagination = ({ pages }) => {
  const history = useHistory()
  const createPages = () => {
    let rows = [];
    for (let i = 0; i <= (pages - 1); i++) {
      rows.push(<button id={`page=${i}`} onClick={(e)=>{
        const { id } = e.target
        history.push(`/orcamentos?${id}`)
        window.location.reload()
      }}>{i + 1}</button>);
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
