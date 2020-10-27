import React, {useState} from 'react'
import Banner from '../images/banner.png'
import './BannerStyles.css';
import Modal from '../Modal/Modal.js';

function BannerComponent() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleBudgetClick = () => setIsModalVisible(!isModalVisible);

    return (
        <div className="div-banner">
            <img alt="5 Marias" className="img-banner" fixed="top" src={Banner}></img>
            <div className="titulo">
                <h1 className="font">Não deixe o seu resíduo ir para o lugar errado. Faça o descarte correto.</h1>
    <button class="btn btn-secondary btn-lg" onClick={handleBudgetClick}>Oçamento Rápido </button>
                <Modal isModalVisible={isModalVisible} handleBudgetClick={handleBudgetClick} />
                
            </div>
        </div>
    )
}

export default BannerComponent