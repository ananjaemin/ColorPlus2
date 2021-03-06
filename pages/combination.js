import { Container,EeventBox } from "../styles/main.js"
import { 
    CombinationContainer,
    Headers,
    SelectButtonBox,
    SelectButton, 
    IroColorBox, 
    IroColorResult,
    Plus, 
    Box, 
    Colornamebox, 
    ContainerBox, 
    ColorRgba,
    ColorHex,
    Sign,
    ResultBox,
    ResultColor, 
} from "../styles/combi.js";
import IroWheel from "../component/IroWheelUI.js";
import IroBox from "../component/IroBoxUI.js";
import { useState } from "react";

export default function useCombination(){
    const [color, setColor] = useState('rgb(255,255,255)');
    const [color2, setColor2] = useState('rgb(255,255,255)');
    const [WheelUI,setWheelUI] = useState(true);
    const [BoxUI,setBoxUI] = useState(false);

    // const onChange = (e) => {
    //   setText(e.target.value);
      
    // };

    // const onClick=()=>{
    //     setColor(text)
    // }
    
    // const onKeyPress = (e) =>{
    //     if(e.key=='Enter'){
    //         onClick();
    //     }

    // }

    const WheelUIhandle = (e) =>{
        setBoxUI(false);
        setWheelUI(true);
    }
    const BoxUIhandle = (e) =>{
        setBoxUI(true);
        setWheelUI(false);
    }

    

    function colorRGB2Hex(color) {
        var rgb = color.split(',');
        var r = parseInt(rgb[0].split('(')[1]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2].split(')')[0]);
    
        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
    }

    function fusion(){
        var rgb1 = color.split(',');
        var r1 = parseInt(rgb1[0].split('(')[1]);
        var g1 = parseInt(rgb1[1]);
        var b1 = parseInt(rgb1[2].split(')')[0]);

        var rgb2 = color2.split(',');
        var r2 = parseInt(rgb2[0].split('(')[1]);
        var g2 = parseInt(rgb2[1]);
        var b2 = parseInt(rgb2[2].split(')')[0]);

        var fusionR = r1 + r2
        var fusionR = fusionR /2
        var fusionR = Math.round(fusionR);

        var fusionG = g1 + g2
        var fusionG = fusionG /2
        var fusionG = Math.round(fusionG);

        var fusionB = b1 + b2
        var fusionB = fusionB /2
        var fusionB = Math.round(fusionB);

        return `rgb(${fusionR},${fusionG},${fusionB})`
    }


    return(
        
        <Container height={"auto"}>
            <EeventBox top height={"100%"} center wfull>
                <Headers>
                    <SelectButtonBox>
                        <SelectButton onClick={WheelUIhandle} left>Wheel</SelectButton>
                        <SelectButton onClick={BoxUIhandle} right>Box</SelectButton>
                    </SelectButtonBox>
                </Headers>
                <CombinationContainer>
                    <Box>
                        <IroColorBox bgrcolor={`#1e1f31`}>
                            <ContainerBox>
                                <IroColorResult bgrcolor={'white'}>
                                    <IroColorResult bgrcolor={color}/>
                                </IroColorResult>
                                {WheelUI ? <IroWheel color={color} setColor={setColor}/> : ""}
                                {BoxUI ? <IroBox color={color} setColor={setColor}/>: ""}
                            </ContainerBox>
                            <Colornamebox>
                                <ColorRgba value={color}/>
                                <ColorHex value={`${colorRGB2Hex(color)}`}/>
                            </Colornamebox>
                        </IroColorBox>

                        <Plus>+</Plus>

                        <IroColorBox bgrcolor={`#1e1f31`}>
                            <ContainerBox>
                                <IroColorResult bgrcolor={'white'}>
                                    <IroColorResult bgrcolor={color2}/>
                                </IroColorResult>
                                {WheelUI ? <IroWheel color={color2} setColor={setColor2}/> : ""}
                                {BoxUI ? <IroBox color={color2} setColor={setColor2}/>: ""}
                            </ContainerBox>
                            <Colornamebox>
                                <ColorRgba value={`${color2}`}/>
                                <ColorHex value={`${colorRGB2Hex(color2)}`}/>
                            </Colornamebox>
                        </IroColorBox>

                       <Sign>=</Sign>
                       <ResultBox>
                            <ResultColor bgrcolor={fusion}/>
                            <Colornamebox>
                                <ColorRgba value={`${fusion()}`}/>
                                <ColorHex value={`${colorRGB2Hex(fusion())}`}/>
                            </Colornamebox>
                       </ResultBox>
                    </Box>
                </CombinationContainer>
            </EeventBox>


        </Container>
    )
}