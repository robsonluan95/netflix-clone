import React,{ useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MoviesRow from "./componentes/moviesRow";
import FeaturedMovie from "./componentes/FeaturedMovie";
import Header from "./componentes/header";
import './App.css'
import Footer from "./componentes/footer";

export default function App(){

  const [movieList,setMovieList]=useState([])
  const [FeaturedData,setFeaturedData] = useState(null)
  const [blackHeader, setBlackHead] =useState(false)

  useEffect( ()=>{
    const scrollListener=()=>{
      if (window.scrollY>10){
        setBlackHead(true)
      }else{
        setBlackHead(false)
      }

    }
    window.addEventListener('scroll',scrollListener)
    return()=>{
      window.removeEventListener('scroll',scrollListener)
    }
  },[])

  useEffect(()=>{
    const loadAll = async () =>{
      //Pegando a Lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      //Pegando Filme em Destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor( Math.random() * (originals[0].itens.results.length -1));
      let chosen = originals[0].itens.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id , 'tv');
      setFeaturedData(chosenInfo)
     
    
    }
    
    loadAll();
  }, []);

  return(
    <div className="page">

      <Header black={blackHeader}/>
      {FeaturedData&&
        <FeaturedMovie item={FeaturedData}/>
      }
      <section className="listas">
        {movieList.map((item,key)=>(
          <MoviesRow key={key} title={item.title} itens={item.itens}/>
        ))}

      </section>

      <Footer/>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="netflix loading"/>
        </div>
      }
      
    </div>

  );
}