import styled from "styled-components";

export const Box =styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

export const ContainerBox2 = styled.div`
    width:500px;
    height:500px;
    display:flex;
    border:3px solid #292a42;
    background:#1e1f31;
    border-radius:15px;
    flex-direction:column;
    align-items:center;
    padding:10px;
    @media screen and (max-width: 949px){
        height:600px;
    }
`;

export const GradientsBoxContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`;

export const GradientsBox = styled.div`
    width:80%;
    height:100%;
    border-radius:15px;
    background:${props => props.gradient || 'black'};
`;

export const StartColorBox = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:${props => props.flexend ? "flex-end":"" };
`;

export const EndColorBox = styled(StartColorBox)`

`;
export const StartColor = styled.button`
    outline:none;
    border:0;
    width:40px;
    height:40px;
    border-radius:5px;
    margin:6px;
    background:${props => props.bgrcolor || 'black'};
`;

export const EndColor = styled(StartColor)``;

export const Body = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 949px){
        flex-direction:column;

    }

`;

export const Showbox = styled.div`
    opacity:${props => props.none || "1"};
    margin:10px;
`;

export const ColorContainer = styled.div`
    width:100%;
    height:80%;
    display:flex;
    @media screen and (max-width: 949px){
        transform: rotate(90deg);
    }
`;

export const OptionContainer = styled.div`
    width:100%;
    height:120px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

export const Gradient = styled.input.attrs({
    type:'text',
})`
    font-size:15px;
    width:450px;
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

export const Deg = styled.input.attrs({
    type:'text',
})`
        font-size:15px;
    width:100px;
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