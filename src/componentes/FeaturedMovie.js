import React from 'react';
import './FeaturedMovie.css';

export default ({item})=>{
    let primeiraData =new Date(item.first_air_date)
    
    let generos=[];
    for (let i in item.genres){
        generos.push(item.genres[i].name)
    }

    let descricao=item.overview
    if (descricao.length>200){
        descricao=descricao.substring(0,200)+'...';
    }
    return(
        <div>
            <section className='featured' style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage:`url(http://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                <div className='featured--vertical'>
                    <div className='featured--horizontal'>
                        <div className='featured--nome'>{item.original_name}</div>
                        <div className='featured--info'>
                            <div className='featured--pontos'>{item.vote_average} pontos</div>
                            <div className='featured--ano'>{primeiraData.getFullYear()}</div>
                            <div className='featured--temporadas'>{item.last_episode_to_air.season_number} temporada{item.last_episode_to_air.season_number !== 1? 's':''} </div>
                        </div>
                        <div className='featured--descricao'>{descricao}</div>
                        <div className='featured--botao'>
                            <a href={`/watch/${item.id}`} className='featured--botaoAssistir' >► Assistir</a>
                            <a href={`/list/add/${item.add}`} className='featured--minhaListaBotao' >+ Minha Lista</a>
                        </div>
                        <div className='featured--generos'><strong>Gêneros: </strong>{generos.join(', ')} </div>
                    </div>

                </div>
                
            </section>
        </div>
    )
}