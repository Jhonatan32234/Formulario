/*
import styled from 'styled-components';

const SelectStyled = styled.input`
    width: 500px;
    height: 35px;
    border: 1px black double;
    border-radius: 5px;
    color: gray;
    font-family: 'Courier New', Courier, monospace;
    display: block;
`;

function Select(props){
    return (<SelectStyled type={props.type} placeholder={props.placeholder}></SelectStyled>)

}

export default Select;*/


import styled from 'styled-components';

const SelectStyled = styled.select`
    width: 500px;
    height: 35px;
    border: 1px black double;
    border-radius: 5px;
    color: gray;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    display: block;
`;

function Select(props){
    const handlerOnChange=(event)=>{
        props.fnVal(event.target.value)
    }

    return (
        <SelectStyled 
            value={props.val} 
            onChange={handlerOnChange}
        >
            <option value="tipo">Tipo</option>
            <option value="Laptop">Laptop</option>
            <option value="Computadora">Computadora</option>
            <option value="Telefono">Telefono</option>
        </SelectStyled>
    )
}

export default Select;