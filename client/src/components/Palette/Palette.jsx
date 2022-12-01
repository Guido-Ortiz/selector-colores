import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import s from './Palette.module.css';

const Palette = ({ id, name, colors }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container__name}>
                <div className={s.name}>{name}</div>
                <DeleteIcon style={{ color: "white", width: '14px', height: '18px' }} />
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