import styled from "styled-components";


export const CombinationContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;
export const ColorBox = styled.div`
    width:250px;
    height:250px;

`;

export const Headers = styled.div`
    width:85%;
    min-width:760.1px;
    max-width:984px;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const SelectButtonBox = styled.div`
    width:30%;
    min-width:300px;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const SelectButton = styled.button.attrs({

})`
    color:#f5f5f5;
    font-size:17px;
    font-weight:bold;
    width:200px;
    height:40px;
    margin-left:${props => props.left ? "0px" : "20px"};
    margin-right:${props => props.right ? "0px" : "20px"};
    outline:none;
    background:#1e1f31;
    border:3px solid #292a42;
    border-radius:7px;

    &:hover{
        color:#906bff;
    }

`;

export const Box = styled.div`
    width:85%;
    min-width:760.1px;
    max-width:984px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media screen and (max-width: 844px){
        flex-direction:column;
    }

`;

export const IroColorBox = styled.div`
    width:325px;
    height:400px;
    border:3px solid #292a42;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    padding-top:0px;
    background:${props => props.bgrcolor || 'black'};
`;

export const ContainerBox = styled.div`
    display:flex;
`;

export const IroColorResult = styled.div`
    width:50px;
    height:314px;
    margin-right:10px;
    border-radius:10px 0px 0px 10px;
    background:${props => props.bgrcolor || 'black'};
`;

export const Plus = styled.div`
    font-size:100px;
    padding:30px;
`;

export const Colornamebox = styled.div`
    width:100%;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

export const ColorRgba = styled.input.attrs({
    type:'text',
})`
    font-size:15px;
    width:200px;
    height:28px;
    background:none;
    color:#f5f5f5;
    border-left:2px solid #464770;
    border-right:2px solid #464770;
    border-bottom:0;
    border-radius:10px;
    text-align:center;
    outline:none;
`;

export const ColorHex = styled(ColorRgba)`
    margin-top:10px;
    width:140px;
`;

export const TestBox = styled.div`
    width:100px;
    height:100px;
    background:${props => props.bgrcolor || 'black'}
`;















