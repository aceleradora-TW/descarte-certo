import React from  'react'
import './Preload.css'
function Preload() {
    return (
        <>
        <div className="spinner">
            <span>Carregando...</span>
            <div className="half-spinner"></div>
        </div>
        </>
    )
}

export default Preload