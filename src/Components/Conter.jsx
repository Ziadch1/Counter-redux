import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { INCREMENT_CONTER, DECREMENT_CONTER} from '../store/conterslice';

const Conter=()=>{
    const dispatch=useDispatch();
    const Conter=useSelector((state)=>state);
    return(
        <div>
            <button onClick={()=> dispatch(DECREMENT_CONTER)}>-</button>
            <span>{Conter.value}</span>
            <button onClick={()=> dispatch(INCREMENT_CONTER)}>+</button>
        </div>


        
    );
};

export default Conter;