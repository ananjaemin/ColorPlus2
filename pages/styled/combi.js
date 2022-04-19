import styled from "styled-components";


export const CombinationContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
`;
export const ColorBox = styled.div`
    width:250px;
    height:250px;

`;

export const Header = styled.div`
    width:100%;
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
















// export const EqualSign = styled.div`
//     font-size:65px;
//     margin:8px;
// `;

// export const Plus = styled(EqualSign)`

// `;

// export const ResultContainer = styled.div`

// `;


// export const CombinationResult = styled.div`
//     width:250px;
//     height:250px;
//     border-radius:15px;
//     background:${props => props.bgrcolor || 'black'}
// `;


