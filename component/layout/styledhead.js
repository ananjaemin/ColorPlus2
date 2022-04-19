import styled from "styled-components";



export const Container = styled.div`
    width:100%;
    height:60px;
    border-bottom:3px solid #292a42;
    padding-bottom:5px;
    z-index:1;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#0e101f; 
    position:fixed;
    @media screen and (min-width:1159px) {
        display:none;
    }
`;

export const HeaderBox = styled.div`
    width:95%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const LogoText = styled.div`
    width:150px;
    height:100%;
    display:flex;
    align-items:center;
    color:#f5f5f5;
    outline:none;
    font-size:45px;
    font-weight:bold;
`;

export const LogoTextV = styled.div`
    color:#bfbfbf;
    height:100%;
    font-size:20px;
    display:flex;
    align-items:flex-end;
`;

