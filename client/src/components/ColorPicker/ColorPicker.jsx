// import React from 'react';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { singleColor } from '../../store/actions/actions';
import s from '../Colors/Colors.module.css';

const ColorPicker = () => {
  const [color, setColor] = useState('lightblue')
  const [colors, setColors] = useState([])
  const [open, setOpen] = useState(false)



  const dispatch = useDispatch()

  const colorsArray = useSelector(state => state.palette)




  const handleOpen = () => {
    setOpen(!open)
  }

  const handleChange = (updatedColor) => {
    if (open) {
      setColor(updatedColor.hex)
      setColors([...colors, color])
    }

  }


  return (
    <div>

      {
        !open
          ? <div className={s.circle} onClick={handleOpen} style={{ backgroundColor: color }}>
            <span>+</span>
          </div>
          :
          <div className={s.circleOpen} onClick={handleOpen} style={{ backgroundColor: color, border: '1px solid red' }}>
            <div style={{ position: 'relative', top: '200px' }}>
              <ChromePicker width='249px' color={color} onChange={(updatedColor) => handleChange(updatedColor)} disableAlpha />
            </div>
          </div>
      }
    </div>

  )
}

export default ColorPicker