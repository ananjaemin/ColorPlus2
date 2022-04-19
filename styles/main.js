import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  padding-left:250px;
  display:flex;
  align-items:center;
  flex-direction:column;
  height:${props => props.height || "auto"};
  @media screen and (max-width:899px) {
    padding-left:0px;
    padding-top:60px;
  }
`;

export const EeventBox = styled.div`
    width:90%;
    height:${props=>(props.height || "auto")};
    margin-top:${props=> (props.top ? "60px" : "0px")};
    display: flex;
    flex-direction:column;
    overflow:hidden;
`;









