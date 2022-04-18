import { Container,EeventBox } from "../styles/main.js"
import { CombinationContainer } from "./styled/combi.js";
import { useState } from "react";
import ColorPicker from "../component/ColorPicker.js";

export default function combination(){
    const [color, setColor] = useState('#fff');

    return(
        
        <Container height={"auto"}>
            <EeventBox top height={"100%"}>
                <CombinationContainer>
                    <ColorPicker setColor={setColor} color={color}></ColorPicker>               

                </CombinationContainer>
            </EeventBox>


        </Container>
    )
}