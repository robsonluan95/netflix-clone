import React,{useState} from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './moviesRow.css'


export default ({title,itens})=>{
    const [scrollX, setScrollX]=useState(0)


    function moverAntes(){
        let scrollValor=scrollX+Math.round(window.innerWidth/2)

        if (scrollValor > 0){
            scrollValor=0
        }
        setScrollX(scrollValor)
    }
    function moverApos(){

        let scrollValor=scrollX-Math.round(window.innerWidth/2);

        let larguraLista=itens.results.length*150

        if ((window.innerWidth-larguraLista)>scrollValor){
            
            scrollValor= (window.innerWidth - larguraLista)-60
        }
        setScrollX(scrollValor)

    };



    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="navegador--antes" onClick={moverAntes} >
                <NavigateBeforeIcon style={{fontSize:50}}/>

            </div>
            <div className="navegador--apos" onClick={moverApos}>
                <NavigateNextIcon style={{fontSize:50}}/> 
            </div>
            <div className="movieRow--listarea"> 
                <div className="movieRow--list" style={{
                    marginLeft:scrollX,
                    width:(itens.results.length * 150)
                }}>
                    {itens.results.length > 0 && itens.results.map((itens, key)=>(
                        <div key={key}className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${itens.poster_path}`} alt={itens.original_title}/>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}