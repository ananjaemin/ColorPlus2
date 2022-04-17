import styled from "styled-components";

export default function Gradientsbox({startcolor,endcolor}){

    return(
        <Container>
            <GradientsBox bgcolor={`linear-gradient(33deg,${startcolor},${endcolor})`}/>
            <Startcolortext>
                <ColorPoint color={`${endcolor}`} />
                {endcolor}
            </Startcolortext>
            <Endcolortext>
                <ColorPoint color={`${startcolor}`}/>
                {startcolor}
            </Endcolortext>
        </Container>
    )


}



const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    border:3px solid #292a42;
    background:#1e1f31;
    border-radius:20px;
    padding:2px;
    margin:7px;
`;

const GradientsBox = styled.div`
    width:125px;
    height:150px;
    margin:10px;
    border-radius:10px;
    background:${props => props.bgcolor || "black"};
`;

const ColorPoint = styled.div`
    width:10px;
    height:10px;
    border-radius:100%;
    background:${props => props.color || "black"};
`;

const Startcolortext = styled.div`
    width: 50%;
    justify-content:space-between;
    align-items:center;
    display:flex;
    font-size:14px;
    margin-bottom:3px;
`;

const Endcolortext = styled(Startcolortext)`

`;