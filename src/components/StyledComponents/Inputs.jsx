import styled from "styled-components";

export const Input = styled.input`
    width: 270px;
    height: 45px;
    border-radius: 15px;
    padding: 0 15px;
    font-size: 18px;
    border: 1px solid #a9a9a9a9;
    align-self: center;
    filter: drop-shadow(1px 1px 3px #dcdcdc);
    transition: all .4s ease;

    &:focus {
        filter: drop-shadow(1px 1px 8px #dcdcdc);   
    }
`