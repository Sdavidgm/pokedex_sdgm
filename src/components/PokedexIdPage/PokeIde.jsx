import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import './styles/pokedexId.css';

const PokeIde = () => {
  const [pokeIdData, getPokeIdData] = useFetch();
    const param = useParams();
  useEffect(() => {
    const url=`https://pokeapi.co/api/v2/pokemon/${param.id}`;
    getPokeIdData(url);
  }, [])
  
 
    return(
        <div className='id_container'>
          <div></div>
          <div className='con_name'>
            <h2  className='id_name'>
              {pokeIdData?.name}          
            </h2>
          </div>
          <div className='con_text'>
            <h3>Weigth</h3>
            <h3>Height</h3>
          </div>
            <ul className='con_item'>
                <li><span>{pokeIdData?.weight}</span></li>             
                <li><span>{pokeIdData?.height}</span></li>
              </ul>
            
                 
                  <div className='container_data'>
                      <div className='id_data'>
                        <div className='data_type'>
                          <h3>Type</h3>
                          <ul className='info_type'>
                          {
                            pokeIdData?.types?.map((type)=>(
                              <li className={`${type.type.name} `} key={type.type.url} >
                                {type.type.name}</li>
                            ))
                          }
                          </ul>
                        </div>
                      </div>
                      <div className='id_abilities'>
                          <div className='data_abilities'>
                            <h3>Abilities</h3>
                              <ul className='info_abilities'>
                                {
                                  pokeIdData?.abilities.map(abilities=>(
                                  <li key={abilities.ability.url} >
                                      {abilities.ability.name}</li>
                                    ))
                                }
                              </ul>
                          </div>
                        </div>
            </div>
            
            <div className='data_stat'>
              <div className='head_stat'>
                <h2>Stats</h2>
                <hr/>
                <img className='head_img' src='./pokeball.png' alt='pokeball img'/>
              </div>
              
              <ul>
                {
                    pokeIdData?.stats.map(stat=>(
                      !stat.stat.name.includes('special')&&
                      <h6 className='label_stat'key={stat.stat.url}>
                      <span className='name_stat'>{stat.stat.name}</span>
                      <span><progress value={stat.base_stat} max={150} className='pos_stat'></progress></span>      
                      <span className='numero_stat'>{stat.base_stat}/150</span>
                      
                      </h6>
                     
                    ))
                }
              </ul>

            </div>
           
        
        </div>
        
      )
    
  }
    


export default PokeIde;