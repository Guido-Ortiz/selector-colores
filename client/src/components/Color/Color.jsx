import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChromePicker } from 'react-color';
import s from './Color.module.css';
import { singleColor } from '../../store/actions/actions';

const Color = ({ index }) => {
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState('black')
    const [colors, setColors] = useState([])

    const colorsArray = useSelector(state => state.palette)

    const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false)
        dispatch(singleColor(color))
    }

    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(true)
    }

    const handleChange = (updatedColor) => {
        if (open) {
            setColor(updatedColor.hex)
            setColors([...colors, color])
        }
    }

    return (
        <div className={s.wrapper}>
            {
                open
                    ? (colorsArray[index] ? <div className={s.circleOpen} onClick={(e) => handleClose(e)} style={{ backgroundColor: colorsArray[index] }} />
                        
                        : <div className={s.circleOpen} onClick={(e) => handleClose(e)} style={{ backgroundColor: colors[colors.length - 1] }} />
                        
                    )

                    : <div className={s.circle} onClick={(e) => handleOpen(e)} style={{ backgroundColor: color }}>
                        <span>+</span>
                    </div>
            }
            
            {
                open && <div className={s.picker}>
                    <ChromePicker width='249px' color={color} onChange={(updatedColor) => handleChange(updatedColor)} disableAlpha/>
                    </div>
            }
        </div>
    )
}

export default Color