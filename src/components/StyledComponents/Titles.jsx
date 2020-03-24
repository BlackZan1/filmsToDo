import styled from "styled-components";

export const BigTitle = styled.p`
    font-size: 40px;
    font-weight: bold;
    align-self: center;  
    font-family: 'Baloo Thambi 2', cursive;
    letter-spacing: 2px;

    &::after {
        content: '';
        display: block;
        background: #000;
        height: 5px;
        width: 90%;
        border-radius: 50px;
        margin: 25px auto;
    }
`