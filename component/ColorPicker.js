import { useEffect, useRef } from 'react'
import iro from '@jaames/iro'

export default function ColorPicker({ setColor, color }) {
  const ref = useRef()
  const colorPicker = useRef()
  useEffect(() => {
    const cp = (colorPicker.current = new iro.ColorPicker(ref.current,{
        width: 250, 
        layout:[
        {
            component: iro.ui.Box,
        },
        {
            component: iro.ui.Slider,
            options: {
              id: 'hue-slider',
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