import React from 'react'
import Banner from '../images/banner.png'
import BannerStyle from './BannerStyles.css'
import Slogan from './texts.json'

function BannerComponent() {
    return (
        <div className="div-banner" id="Orcamento">
            <img alt="5 Marias" className="img-banner" fixed="top" src={Banner}></img>
            <div className="titulo">
                <h1 className="font">{Slogan.banner.title}</h1>
            </div>
        </div>
    )
} export default BannerComponent