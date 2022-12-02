import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import s from './Palette.module.css';
import { useDispatch } from 'react-redux';
import { deletePalette } from '../../store/actions/actions';

const Palette = ({ id, name, colors }) => {

    const dispatch = useDispatch()

    console.log(id)

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deletePalette(id))
        window.location.reload() 
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container__name}>
                <div className={s.name}>{name}</div>
                <DeleteIcon style={{ color: "white", width: '14px', height: '18px' }} onClick={(e) => handleDelete(e)} />
            </div>
            <div className={s.container__colors}>
                {
                    colors.map(e => <div className={s.circle} style={{backgroundColor: `${e}`}} />)
                }
            </div>
        </div>
    )
}

export default Palette