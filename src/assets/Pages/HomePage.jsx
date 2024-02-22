import React, { useRef } from 'react';
import { setTrainerName } from '../../Store/slices/trainerName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css';

const HomePage = () => {

    const dispatch = useDispatch();
    const textInput = useRef();
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(setTrainerName(textInput.current.value.trim()));
        navigate('/pokedex');
    }
   
  return (
    <div className='home_container'>
        <div className='container_img'>
          <img className='home_img' src='/pokedex.png' alt='title pokedex'/>
        </div>
        <div className='container_text'>
          <h1 className='home_title'>¡Hola entrenador!</h1>
          <h2 className='home_text'>Para poder comenzar, dame tu nombre</h2>
          <form className='home_form' onSubmit={handleSubmit}>
            <input className='home_input' type="text" ref={textInput} />
            <button className='home_btn'>Comenzar</button>
        </form>
        </div>   
        
          <footer className='footer'>
            <img src='./foot_home.png' alt="img foot"/>
          </footer>
        
        
    </div>
   
  )
}

export default HomePage;
