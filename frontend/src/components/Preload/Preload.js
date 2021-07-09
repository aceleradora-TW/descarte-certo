import React from 'react'
import './Preload.css'

function Preload({ loading, children }) {
    return (
        <>
            {loading ? (<div className="spinner">
                <span>Carregando...</span>
                <div className="half-spinner"></div>
            </div>) : (
                <>{ children }</>)}
        </>
    )
}

export default Preload