import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPalettes } from '../../store/actions/actions';
import Palette from '../Palette/Palette';

import s from './Palettes.module.css';

const Palettes = () => {

    const palettes = useSelector(state => state.palettes)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPalettes())
    }, [dispatch])

    return (
        <div className={s.wrapper}>
            <div className={s.title}>Saved palettes</div>
            
            <div className={s.palettes}>
                {
                    palettes.length > 0
                    ? palettes.map(e => {
                        return(
                            <div key={e.id}>
                                <Palette id={e.id} name={e.name} colors={e.colors} />
                            </div>
                        )
                    })
                    : <p>No palettes saved yet!</p>
                }
            </div>
        </div>
    )
}

export default Palettes