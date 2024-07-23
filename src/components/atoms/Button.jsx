import styled from 'styled-components';

const ButtonStyled = styled.button`
   width: 80%;
   height: 40px;
   background-color: gray;
   border-radius: 3px;
  // box-shadow: 10px 10px 5px 0px black;
   &:hover{
    background-color: #292929;
    color: white;

   }
`;

function Button({title,onClik}){
    return (<ButtonStyled onClick={onClik}>{title}</ButtonStyled>)

}

export default Button;