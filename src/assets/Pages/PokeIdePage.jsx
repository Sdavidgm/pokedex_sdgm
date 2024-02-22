import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import PokeIde from '../../components/PokedexIdPage/PokeIde';
import './styles/pokeIdPage.css';

const PokeIdePage = () => {

  const [pokeData, getPokeData] = useFetch();
  const param =useParams();
  useEffect(() => {
    const url=`https://pokeapi.co/api/v2/pokemon/${param.id}`;
    getPokeData(url);
      
  
  }, [])
    
  return (
    <div className='pokeid_container'>
      
      <img className='head_title' src="./head_poke.png" alt="head_img" />
      
      <img className='poke_img' src={pokeData?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
     
        <div className='container_poker'>
          
          <h3 className='id_number'># {pokeData?.id}</h3>
        
      
        <PokeIde/>  
      </div>
      
    </div>
  )
}

export default PokeIdePage;