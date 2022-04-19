import { useEffect, useRef } from 'react'
import iro from '@jaames/iro'

export default function IroWheel({ setColor, color }) {
  const ref = useRef()
  const colorPicker = useRef()
  useEffect(() => {
    const cp = (colorPicker.current = new iro.ColorPicker(ref.current,{
        width: 250,
        color,
        sliderSize:20,
        layout:[
        {
            component: iro.ui.Wheel,
            options: {
              wheelLightness:false,
            }
        },
        {
            component: iro.ui.Slider,
            options: {
              sliderType: 'value'
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