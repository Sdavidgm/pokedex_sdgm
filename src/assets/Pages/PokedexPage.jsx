import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../../Store/slices/pokemonName.slice';
import useFetch from '../../hooks/useFetch';
import PokeCard from '../../components/pokedexPage/PokeCard';
import SelectType from '../../components/pokedexPage/SelectType';
import './styles/pokedexPage.css';
import Pagination from '../../components/pokedexPage/Pagination';

const PokedexPage = () => {
  const [selectValue, setSelectValue] = useState('allPokemons');
  const trainerName = useSelector((store)=>store.trainerName);
  const pokemonName = useSelector((store)=>store.pokemonName);
  const dispatch = useDispatch();
  const [pokemons, getPokemons, getPerType] = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [pagesNumberLimit, setPagesNumberLimit] = useState(15);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(15);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  

  useEffect(() => {
    if(selectValue==='allPokemons'){
      const url='https://pokeapi.co/api/v2/pokemon/?limit=1302';
      getPokemons(url);
    
    }else{
      getPerType(selectValue);
    }
   
  }, [selectValue]);
  
  const textInput= useRef();

  const handleSubmit =(event)=>{
    event.preventDefault();
    dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
    textInput.current.value='';
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = pokemons?.results.slice(firstPostIndex, lastPostIndex);

  const cbFilter=()=>{
    if (pokemonName){
      return pokemons?.results.filter(element=>element.name.includes(pokemonName));
    }else{
      return currentPosts;
    } 
  }
  
  
  return (
    <div className='pokedex'>
      <img src='./head_poke.png' alt='poke header'/>
      <section className='poke_header'>
      <h3><span>Bienvenido {trainerName}, </span>aquí podrás encontrar tu pokemón favorito</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={textInput} placeholder='Busca un Pokemón' />
          <button>Buscar</button>
        </form>
        <SelectType
        setSelectValue={setSelectValue}
      />
      </div>
      </section>
      <div >
        <Pagination
          totalPosts ={pokemons?.results.length}
          postsPerPage = {postsPerPage}
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage} 
          currentPosts={currentPosts}  
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          setMaxPageNumberLimit={setMaxPageNumberLimit}
          setMinPageNumberLimit={setMinPageNumberLimit}
          pagesNumberLimit ={pagesNumberLimit}
          setPagesNumberLimit={setPagesNumberLimit}
        />
      </div>
      <section className='poke_container'>
        {
          cbFilter()?.map(poke=>
            (
                <PokeCard
                  key={poke.url}
                  url={poke.url}
                />
            ))
        }
      </section>
      <div >
        <Pagination
          totalPosts ={pokemons?.results.length}
          postsPerPage = {postsPerPage}
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage} 
          currentPosts={currentPosts}  
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          setMaxPageNumberLimit={setMaxPageNumberLimit}
          setMinPageNumberLimit={setMinPageNumberLimit}
          pagesNumberLimit ={pagesNumberLimit}
          setPagesNumberLimit={setPagesNumberLimit}
        />
      </div>
    </div>
  )
}

export default PokedexPage;