import { useEffect, useRef } from 'react'
import iro from '@jaames/iro'

export default function IroBox({ setColor, color }) {
  const ref = useRef()
  const colorPicker = useRef()
  useEffect(() => {
    const cp = (colorPicker.current = new iro.ColorPicker(ref.current,{
        width: 250,
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
              sliderType: 'alpha'
            }
          },
        ]
    }))
    cp.on('color:change', (color) => {
        if (setColor) setColor(color.rgbaString)
    })
  }, [])
  return <div ref={ref} />
}