import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  padding-left:250px;
  display:flex;
  align-items:center;
  flex-direction:column;
`;

export const EeventBox = styled.div`
    width:90%;
    margin-top:${props=> (props.top ? "60px" : "0px")};
    display: flex;
    flex-direction:column;
`;

export const DropButton = styled.label`
    margin-bottom:20px;
    background:0;
    border:0;
    outline:0;

`;

export const CheckBool = styled.input`
    display:none;
`;