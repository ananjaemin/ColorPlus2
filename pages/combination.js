import { Container,EeventBox } from "../styles/main.js"
import { CombinationContainer,Header,SelectButtonBox,SelectButton } from "./styled/combi.js";
import { useState } from "react";
import IroWheel from "../component/IroWheelUI.js";
import IroBox from "../component/IroBoxUI.js";

export default function combination(){
    const [color, setColor] = useState('rgba(255,255,255,1)');
    const [WheelUI,setWheelUI] = useState(true);
    const [BoxUI,setBoxUI] = useState(false);

    const WheelUIhandle = (e) =>{
        setBoxUI(false);
        setWheelUI(true);
    }
    const BoxUIhandle = (e) =>{
        setBoxUI(true);
        setWheelUI(false);
    }

    return(
        
        <Container height={"auto"}>
            <EeventBox top height={"100%"}>
                <Header>
                    <SelectButtonBox>
                        <SelectButton onClick={WheelUIhandle} left>Wheel</SelectButton>
                        <SelectButton onClick={BoxUIhandle} right>Box</SelectButton>
                    </SelectButtonBox>
                </Header>
                <CombinationContainer>
                    {WheelUI ? <IroWheel color={color} setColor={setColor}/> : ""}
                    {BoxUI ? <IroBox color={color} setColor={setColor}/>: ""}

                </CombinationContainer>
            </EeventBox>


        </Container>
    )
}