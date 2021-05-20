import styled from "styled-components";

export const Container = styled.div`
border: 2px solid ${props => props.theme.color.primary2};
height: 400px;
width: 600px;
margin: 10vh auto;
display: flex;
flex-direction: column;
justify-content: space-around;
`;