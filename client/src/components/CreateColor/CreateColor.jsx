import React from 'react';
import { ChromePicker } from 'react-color';
import Color from '../Color/Color';
import s from './CreateColor.module.css';

const CreateColor = () => {

 
    return (
        <div className={s.wrapper}>
            <div className={s.circles}>
                <Color index={0} />
                <Color index={1} />
                <Color index={2} />
                <Color index={3} />
                <Color index={4} />
            </div>
            <div >
                
                <input type='text' />
            </div>
        </div>
    )
}

export default CreateColor