import React, { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { getPalettes, postPalette } from '../../store/actions/actions';
import Color from '../Color/Color';
import s from './CreateColor.module.css';

const CreateColor = () => {

    const [name, setName] = useState('')

    const palette = useSelector(state => state.palette)
    
    const dispatch = useDispatch()

    // const handleChange = (e) => {
    //     setName({
    //         ...name,
    //         [e.target.name]: e.target.value
    //     })
    // }
    
    const handleClick = (e) => {
        e.preventDefault()
        let data = {}
        data.name = name
        data.colors = palette
        dispatch(postPalette(data))
        window.location.reload() 
        setName('')
    }

    return (
        <div className={s.wrapper} style={{border: '1px solid red'}}>
            <div className={s.circles}>
                <Color index={0} />
                <Color index={1} />
                <Color index={2} />
                <Color index={3} />
                <Color index={4} />
            </div>
            <div className={s.wrapper__input}>
                <div className={s.label}>Name</div>
                <div className={s.input__container}>
                    <input type='text' placeholder='Website color scheme' name='name' value={name} 
                    // onChange={(e) => handleChange(e)} 
                    onChange={(e) => setName(e.target.value)}
                    />
                    { palette.length === 5 
                    ? <button onClick={handleClick}>+</button>
                    : <button disabled>+</button>}
                </div>
            </div>
            {/* <div style={{position: 'relative', top: '7px', left: '-200px'}}>

            <ChromePicker width='249px' />
            </div> */}
        </div>
    )
}

export default CreateColor