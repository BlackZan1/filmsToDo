import styled from "styled-components";

export const SearchButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #dcdcdc; 
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 20px;
    transition: all .4s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.6);
    }
`