import { Container,EeventBox } from "../styles/main.js"
import { SketchPicker } from 'react-color';
import { useState } from "react";

export default function combination(){
    const [color,setColor] = useState('hsl(0, 0%, 100%)');


    return(
        <Container>
            <EeventBox top>
                <SketchPicker color={color} onChange={(color)=>{setColor(color.hsl)}} width={400} height={400}/>


            </EeventBox>


        </Container>
    )
}