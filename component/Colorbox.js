import styled from "styled-components"

export default function Colorbox({bgcolor,title,hex}){

    return(
        <Container>
            <ColorBox bgrcolor={`var(${bgcolor})`}/>
            <ColorTitle>{title}</ColorTitle>
            <Colorhex>{hex}</Colorhex>
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

const ColorBox = styled.div`
	width: 90px;
    height: 90px;
    border-radius: 10px;
    margin:10px;
    vertical-align: middle;
    text-align: center;
    background:${props => props.bgrcolor || 'black'};
`;

const ColorTitle = styled.span`
    font-size:15px;
`;

const Colorhex = styled.div`
    font-size:13px;
`;
