const API_KEY ='7cb5680e7274f1771b251ebfef4b8fb0'; //CHAVE DA API  
const API_BASE ='https://api.themoviedb.org/3'; //BASE DA API 

/* 
-ORIGINAIS DA NETFLIX   
-RECOMENDADOS
-EM ALTA(top reted)
-Lista de Filme ,Açao, Comédia, Terror, Romance, Documentários

*/
const BasicFetch = async(endPoint)=>{
    const req = await fetch(`${API_BASE}${endPoint}`)
    const json= await req.json();
    return json;
}


export default {



    getHomeList: async()=>{



        //Lista para os filmes
        return[
            {
                slug:'originals',
                title: 'Originais da Netflix',
                itens:await BasicFetch(`/discover/tv?with_network=123&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recomendados para Você',
                itens: await BasicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Em Alta',
                itens: await BasicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Ação',
                itens: await BasicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comédia',
                itens: await BasicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                itens: await BasicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romace',
                title:'Romance',
                itens: await BasicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title:'Documentários',
                itens: await BasicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }


        ]
    },
    getMovieInfo: async(movieId,movieType) => {

        let info = {};

        if (movieId){
            switch(movieType){
                case 'movie':
                    info = await BasicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await BasicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info= null;
                break;


            }
        }
        return info;
    }

}