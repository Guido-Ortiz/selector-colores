import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { singleColor } from '../../store/actions/actions';

import s from './Colors.module.css';

const Colors = () => {

  const [color, setColor] = useState('lightblue')
  const [colors, setColors] = useState([])
  const [open, setOpen] = useState(false)



  const dispatch = useDispatch()

  const colorsArray = useSelector(state => state.palette)

  const handleChange = (updatedColor) => {
    if (open) {
      setColor(updatedColor.hex)
      setColors([...colors, color])
    }
    if (open2) {
      setColor2(updatedColor.hex)
      setColors2([...colors2, color2])
    }
    if (open3) {
      setColor3(updatedColor.hex)
      setColors3([...colors3, color3])
    }
    if (open4) {
      setColor4(updatedColor.hex)
      setColors4([...colors4, color4])
    }
    if (open5) {
      setColor5(updatedColor.hex)
      setColors5([...colors4, color4])
    }
  }

  const handleOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    dispatch(singleColor(color))
  }

  const [color2, setColor2] = useState('lightblue')
  const [colors2, setColors2] = useState([])
  const [open2, setOpen2] = useState(false)

  const handleOpen2 = (e) => {
    e.preventDefault()
    setOpen2(true)
  }

  const handleClose2 = () => {
    setOpen2(false)
    setColors2([...colors2, color2])

    dispatch(singleColor(color2))
    // setColors2([])
  }



  const [color3, setColor3] = useState('lightblue')
  const [colors3, setColors3] = useState([])
  const [open3, setOpen3] = useState(false)

  const handleOpen3 = (e) => {
    e.preventDefault()
    setOpen3(true)
  }

  const handleClose3 = () => {
    setOpen3(false)
    setColors3([...colors3, color3])

    dispatch(singleColor(color3))
    // setColors3([])
  }




  const [color4, setColor4] = useState('lightblue')
  const [colors4, setColors4] = useState([])
  const [open4, setOpen4] = useState(false)

  const handleOpen4 = (e) => {
    e.preventDefault()
    setOpen4(true)
  }

  const handleClose4 = () => {
    setOpen4(false)
    setColors4([...colors4, color4])

    dispatch(singleColor(color4))
    // setColors4([])
  }



  const [color5, setColor5] = useState('lightblue')
  const [colors5, setColors5] = useState([])
  const [open5, setOpen5] = useState(false)

  const handleOpen5 = (e) => {
    e.preventDefault()
    setOpen5(true)
  }

  const handleClose5 = () => {
    setOpen5(false)
    setColors5([...colors5, color5])

    dispatch(singleColor(color5))
    // setColors5([])
  }



console.log(colorsArray[0])

  return (
    <div className={s.container}>
      <div className={s.circles}>

        {
          open
            ? (colorsArray[0] ? <div className={s.circleOpen} onClick={(e) => handleClose(e)} style={{ backgroundColor: colorsArray[0] }} />
                    : <div className={s.circleOpen} onClick={(e) => handleClose(e)} style={{ backgroundColor: colors[colors.length - 1] }}>
                        <div style={{ position: 'relative', top: '200px' }}>
                          <ChromePicker width='249px' color={color} onChange={(updatedColor) => handleChange(updatedColor)} disableAlpha/>
                        </div>
                      </div>
            )

            : <div className={s.circle} onClick={(e) => handleOpen(e)} style={{ backgroundColor: color }}>
              <span>+</span>
            </div>
        }

        {
          open2
            ? (colorsArray[1] 
                ? <div className={s.circleOpen} onClick={(e) => handleClose2(e)} style={{ backgroundColor: colorsArray[1] }} />
                : <div className={s.circleOpen} onClick={(e) => handleClose2(e)} style={{ backgroundColor: colors2[colors2.length - 1] }}>
                    <div style={{ position: 'relative', top: '200px' }}>
                      <ChromePicker width='249px' color={color2} onChange={(updatedColor) => handleChange(updatedColor)} />
                    </div>
                  </div>
              )
            : <div className={s.circle} onClick={(e) => handleOpen2(e)} style={{ backgroundColor: color2 }}>
                <span>+</span>
              </div>
        }

        {
          open3
            ? (colorsArray[2] ? <div className={s.circleOpen} onClick={(e) => handleClose3(e)} style={{ backgroundColor: colorsArray[2] }} />


              : <div className={s.circleOpen} onClick={(e) => handleClose3(e)} style={{ backgroundColor: colors3[colors3.length - 1] }}>

                <div style={{ position: 'relative', top: '200px' }}>

                  <ChromePicker width='249px' color={color3} onChange={(updatedColor) => handleChange(updatedColor)} />
                </div>
              </div>
            )

            : <div className={s.circle} onClick={(e) => handleOpen3(e)} style={{ backgroundColor: color3 }}>
              <span>+</span>
            </div>
        }

        {
          open4
            ? (colorsArray[3] ? <div className={s.circleOpen} onClick={(e) => handleClose4(e)} style={{ backgroundColor: colorsArray[3] }} />


              : <div className={s.circleOpen} onClick={(e) => handleClose4(e)} style={{ backgroundColor: colors4[colors4.length - 1] }}>

                <div style={{ position: 'relative', top: '200px' }}>

                  <ChromePicker width='249px' color={color4} onChange={(updatedColor) => handleChange(updatedColor)} />
                </div>
              </div>
            )

            : <div className={s.circle} onClick={(e) => handleOpen4(e)} style={{ backgroundColor: color4 }}>
              <span>+</span>
            </div>
        }

        {
          open5
            ? (colorsArray[4] ? <div className={s.circleOpen} onClick={(e) => handleClose5(e)} style={{ backgroundColor: colorsArray[4] }} />


              : <div className={s.circleOpen} onClick={(e) => handleClose5(e)} style={{ backgroundColor: colors5[colors5.length - 1] }}>
                <div style={{ position: 'relative', top: '200px' }}>

                  <ChromePicker width='249px' color={color5} onChange={(updatedColor) => handleChange(updatedColor)} />
                </div>
              </div>
            )

            : <div className={s.circle} onClick={(e) => handleOpen5(e)} style={{ backgroundColor: color5 }}>
              <span>+</span>
            </div>
        }

      </div>
      <div className={s.container__picker}>
        {/* <ChromePicker width='249px' color={color2} onChange={(updatedColor) => handleChange(updatedColor)} /> */}
        <div>
          <div>Name</div>
          <div>
            <input />
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  )


}

export default Colors