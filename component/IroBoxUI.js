import { useEffect, useRef } from 'react'
import iro from '@jaames/iro'

export default function IroBox({ setColor, color }) {
  const ref = useRef()
  const colorPicker = useRef()
  useEffect(() => {
    const cp = (colorPicker.current = new iro.ColorPicker(ref.current,{
        width: 200,
        color,
        sliderSize:20,
        layout:[
        {
            component: iro.ui.Box,
            options: {
              wheelLightness:false,
            }
        },
        {
            component: iro.ui.Slider,
            options: {
              sliderType: 'hue'
            }
        },
        {
            component: iro.ui.Slider,
            options: {
              sliderType: 'kelvin'
            }
          },
        ]
    }))
    cp.on('color:change', (color) => {
        if (setColor) setColor(color.rgbString)
    })
  }, [])
  return <div ref={ref} />
}