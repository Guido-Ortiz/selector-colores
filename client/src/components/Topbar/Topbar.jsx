import React from 'react';
import PaletteIcon from '@mui/icons-material/Palette';
import s from './Topbar.module.css';

const Topbar = () => {
  return (
    <div className={s.container}>
        <div className={s.icon}>
            <PaletteIcon style={{color: '#fff'}}/>
        </div>
        <div className={s.title}>Color palette generator</div>
    </div>
  )
}

export default Topbar