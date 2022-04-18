import { useEffect, useRef } from 'react'
import iro from '@jaames/iro'

export default function ColorPicker({ setColor, color }) {
  const ref = useRef()
  const colorPicker = useRef()
  useEffect(() => {
    const cp = (colorPicker.current = new iro.ColorPicker(ref.current, {
      color
    }))
    cp.on('color:change', (color) => {
        if (setColor) setColor(color.hexString)
    })
  }, [])
  return <div ref={ref} />
}