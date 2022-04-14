import styled from "styled-components";



export const EeventBox = styled.div`
    width:90%;
    margin-top:${props=> (props.top ? "60px" : "0px")};
    display: flex;
    flex-direction:column;
`;

export const BoxHeader = styled.div`
    width:100%;
    height:90px;
    display:flex;
    align-items:flex-end;
`;

export const ColorBoxContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width:100%;
    padding-left:30px;
`;

export const Title = styled.div`
    font-size:25px;
    font-weight:bold;
    margin-bottom:20px;
`;









