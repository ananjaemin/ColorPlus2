import styled from "styled-components";

export default function Loading(){
    return(
        <Container>
            로딩중
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#f5f5f5;
    font-size:50px;
`;