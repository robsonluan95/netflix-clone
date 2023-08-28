import React from "react";
import IMG from '../assets/insta.png'
import './footer.css';

export default ()=>{
    return(
        <footer>
            <div className="footer--nomes">
                <h3>Feito por @RobsonLuan95</h3>
                <img className="imagem" src={IMG}/>
            </div>
            <div className="dados">
                <h3>Direito de imagem Netflix</h3>
                <h3>Dados do Tmdb</h3>
            </div>
        </footer>
    )
}