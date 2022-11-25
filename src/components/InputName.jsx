import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import imgone from '../img/img1.png'
import '../App'
import imgtwo from '../img/img3.png'

const InputName = () => {
    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const enterName = () => {
        navigate("/pokedex")
        dispatch(changeName(userName))
    }
    return (
        <div className='container-input'>
            
            <div className="container-button">
            <img src={imgtwo} alt="" className='img-two'/>
                <h1>Hello, Welcome pokedex</h1>
                <h4>Give me your name to start</h4>
                <img src={imgone} alt="" className='img-one' />
                <div className="input-button">
                    <input type="text" onChange={e => setUserName(e.target.value)} value={userName} />
                    <button onClick={enterName}><i className="fa-solid fa-paper-plane fa-lg"></i></button>
                </div>
            </div>
        </div>
    );
};

export default InputName;