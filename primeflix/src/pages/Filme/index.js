import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../services/api';
import "./filme.css"

function Filme(){
    const { id } = useParams()
    const [filme, setFilme ] = useState({}) 
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`movie/${id}`,{
                params:{
                    api_key: "88a65939ca18f60c284da99205a4fbcf",
                    language: "pt-BR"
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false);
            })
            .catch(()=>{
                console.log("FILME NÃO ENCONTRADO")
            })
        }

    loadFilme()


    return()=>{
        console.log("FOI DESMONTADO")
    }
    },[])

    if(loading){
        return(
          <div className="loading">
            <h1>Carregando detalhes...</h1>
          </div>
        )
      }

    return(
        <div className='filme-info'>
            <h1 className='title'>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse: </h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <p>Data de lançamento</p>
        </div>
    )
}
export default Filme