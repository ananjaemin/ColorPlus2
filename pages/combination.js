import { Container,EeventBox } from "../styles/main.js"
import { CombinationContainer,TestBox } from "./styled/combi.js";
import { useState } from "react";
import ColorPicker from "../component/ColorPicker.js";

export default function combination(){
    const [color, setColor] = useState('rgba(255,255,255,1)');

    return(
        
        <Container height={"auto"}>
            <EeventBox top height={"100%"}>
                <CombinationContainer>
                    <ColorPicker setColor={setColor} color={color}></ColorPicker>               
                    <TestBox bgrcolor={`white`}>
                        <TestBox bgrcolor={`${color}`}></TestBox>
                    </TestBox>
                </CombinationContainer>
            </EeventBox>


        </Container>
    )
}