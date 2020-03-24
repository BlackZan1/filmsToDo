import React from 'react';
import styled from 'styled-components';
import noImage from '../../../img/noImage.png';

const WrapperItemContainer = styled.div`
    width: 450px;
    height: 170px;
    animation: fadeInLeft .8s ease-in-out;
    margin: 10px auto;
    border-radius: 10px;
    padding: 15px 5px 50px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-shadow: 0.5px 0.5px 4px #323232;  

    & > p {
        font-size: 16px;
        font-weight: 500;
        width: 200px;
    }
`

const WrapperItemContainerImage = styled.div`
    height: 100px !important;
    width: 100px !important;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    border-radius: 50%;
    background: #323232;

    & > img {
        height: 150px;
    }
`

const WrapperItemButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > button {
        width: 50px;
        height: 50px;
        margin: 0 10px 5px 0;
        border-radius: 50%;
        border: 1px solid #dcdcdc;
        box-shadow: 0.5px 1px 4px #323232;
        transition: all .4s ease;

        &:hover {
            background: #dcdcdc;
        }
    }
`

const WrapperItem = ({ name, id, image, date, theme, deleteToDoItem, successHandler }) => {
    return (
        <WrapperItemContainer style={{background: theme}}>
            <WrapperItemContainerImage>
                <img src={image !== 'N/A' ? image : noImage} alt="Loading..."/>
            </WrapperItemContainerImage>

            <p>
                {name}
            </p>

            <WrapperItemButtons>
                <button onClick={() => deleteToDoItem(id)}>Delete</button>

                <button onClick={() => deleteToDoItem(id)}>Done</button>
            </WrapperItemButtons>

            <p>
                When: {new Date(date).toLocaleString()}
            </p>
        </WrapperItemContainer>
    )
}

export default WrapperItem;