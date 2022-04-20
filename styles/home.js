import styled from "styled-components";


export const BoxHeader = styled.div`
    width:100%;
    height:52.89px;
    display:flex;
    align-items:flex-end;
`;

export const ColorBoxContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    width:100%;
    padding-left:30px;
`;

export const GradientsContainer = styled(ColorBoxContainer)`

`;

export const Title = styled.div`
    font-size:25px;
    font-weight:bold;
    margin-bottom:20px;
`;

export const MoreButtonBox = styled.div`
    width:85%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    box-shadow:0px -27px 12px 10px #0e101f;
    margin-bottom:${props => props.test ? "100px":"0px"};

`;

export const MoreButton = styled.button`
    width:150px;
    outline:none;
    background:none;
    color:#d9d9d9;
    font-size:20px;
    font-weight:bold;
    padding-bottom:5px;
    margin-right:50px;
    border:0;
    border-right:3px solid #d4d4d4;
    border-bottom:3px solid #d4d4d4;
    border-radius:0px 0px 10px 0px;
    //
    &:hover{    
        color:#906bff;
    }
    

`;

export const EeventBox2 = styled.div`
    width:90%;
    height:${props=>(props.height || "auto")};
    margin-top:${props=> (props.top ? "60px" : "0px")};
    display: flex;
    align-items:center;
    flex-direction:column;
    overflow:hidden;
    padding-bottom:${props=>(props.MorePading)};
`;








