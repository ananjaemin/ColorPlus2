import styled from "styled-components";


const Layouthover = styled.a`
    &:hover{
        color:#906bff;
    }
`;

export const Box = styled.div`
    width:245px;
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`;

export const Logo = styled.div`
    width:80%;
    height:110px;
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
`;

export const LogoText = styled(Layouthover)`
    color:#f5f5f5;
    outline:none;
    font-size:45px;
    display:flex;
    font-weight:bold;

`;

export const LogoTextV = styled.div`
    color:#bfbfbf;
    font-size:20px;
    display:flex;
    align-items:flex-end;
`;

export const MenubarBox = styled.div`
    width:100%;
    height:500px;
    display:flex;
    align-items:center;
    justify-content:flex-end;

`;

export const Menubar_list =  styled.div`
    width:169px;
    height: 400px;
    display:flex;
    flex-direction:column;
`;

export const Light_line = styled.div`
    width:4px;
    height:90%; 
    background-color: aqua;
    box-shadow: 0px 0px 12px aqua;
    border-radius:20px;
`;
    
export const Menu = styled(Layouthover)`
    font-weight:bold;
    font-size: 20px;
    margin-bottom:12px;
    padding-left: 12px; 
    border-radius:2px;
    outline:none;
    color: ${(props) => (props.href === props.pathname ? "#906bff" : "#f5f5f5")};
    border-left:${(props)=>(props.href === props.pathname ? "3px solid #906bff":"0px")};
`;

export const Container = styled.div`
    display:flex;
    /* height:721.600px; */
    height:100%;
    align-items:center;
    position:fixed;

    @media screen and (max-width:1159px) {
        display:none;
    }

`;



