import styled from "styled-components";
import { Container, EeventBox } from "../styles/main";
import { Body, Box, ColorContainer, ContainerBox2, Deg, EndColor, EndColorBox, GradientsBox, GradientsBoxContainer, OptionContainer, Showbox, StartColor, StartColorBox,Gradient } from "./styled/gradi";
import { Headers,SelectButtonBox,SelectButton,IroColorBox,ContainerBox,IroColorResult,Colornamebox,ColorRgba,ColorHex } from "./styled/combi";
import { useState } from "react/cjs/react.development";


import IroBox from "../component/IroBoxUI";
import IroWheel from "../component/IroWheelUI";

export default function gradients(){
    const [IroStartColor,setIroStartColor] = useState(false)
    const [IroEndtColor,setIroEndColor] = useState(false)

    const [deg,setdeg] = useState('0');
    const [color, setColor] = useState('rgb(255,255,255)');
    const [color2, setColor2] = useState('rgb(255,255,255)');

    const [WheelUI,setWheelUI] = useState(true);
    const [BoxUI,setBoxUI] = useState(false);

    function StartColorhandle(){
        setIroStartColor(!IroStartColor)
    }
    function EndColorhandle(){
        setIroEndColor(!IroEndtColor)
    }

    const WheelUIhandle = (e) =>{
        setBoxUI(false);
        setWheelUI(true);
    }
    const BoxUIhandle = (e) =>{
        setBoxUI(true);
        setWheelUI(false);
    }

    const onChange = (e) => {
        setdeg(e.target.value);
        if (e.target.value == ""){
            setdeg("0")
        }
      };

    function colorRGB2Hex(color) {
        var rgb = color.split(',');
        var r = parseInt(rgb[0].split('(')[1]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2].split(')')[0]);
    
        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
    }

    return(
        <Container>
            <EeventBox top center>
                <Box>
                    <Headers>
                        <SelectButtonBox>
                            <SelectButton onClick={WheelUIhandle} left>Wheel</SelectButton>
                            <SelectButton onClick={BoxUIhandle} right>Box</SelectButton>
                        </SelectButtonBox>
                    </Headers>
                    <Body>
                        <Showbox none={`${IroStartColor ? 1:0}`}>
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
                        </Showbox>

                        <ContainerBox2>
                            <GradientsBoxContainer>
                                <ColorContainer>
                                    <StartColorBox flexend>
                                        <StartColor bgrcolor={color} onClick={StartColorhandle}></StartColor>
                                    </StartColorBox>
                                    <GradientsBox gradient={`linear-gradient(${deg}deg,${color},${color2})`}/>    
                                    <EndColorBox >
                                        <EndColor bgrcolor={color2} onClick={EndColorhandle} ></EndColor>
                                    </EndColorBox>             
                                </ColorContainer>
                                <OptionContainer>
                                    <Gradient value={`linear-gradient(${deg}deg,${color},${color2})`}></Gradient>
                                    <Deg onChange={onChange} value={deg}></Deg>
                                </OptionContainer>
                                
                            </GradientsBoxContainer>
                        </ContainerBox2>
                        
                        <Showbox none={`${IroEndtColor ? 1:0}`}>
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
                        </Showbox>
                    </Body>


                </Box>
            </EeventBox>
        </Container>
    )
}


