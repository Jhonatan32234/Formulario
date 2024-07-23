
import styled from 'styled-components';

const InputStyled = styled.input`
    width: 500px;
    height: 35px;
    border: 1px black double;
    border-radius: 5px;
    color: gray;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    display: block;
`;

function Input(props){
    const handlerOnChange=(event)=>{
        props.fnVal(event.target.value)
    }
    return (<InputStyled type={props.type} placeholder={props.placeholder}  onChange={handlerOnChange}></InputStyled>)

}

export default Input;

