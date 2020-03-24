import React from 'react';
import styled from 'styled-components';
import noImage from '../../../img/noImage.png';
import successImage from '../../../img/success.png';

const SearchItemContainer = styled.div`
    width: 380px;
    height: 200px;
    box-sizing: border-box;
    box-shadow: 0.2px 0.2px 5px #323232;
    border-radius: 20px;
    margin: 15px auto;
    animation: fadeInLeft .8s ease;
    position: relative;
    overflow: hidden;
`

const SearchItemSircleImage = styled.div`
    position: absolute;
    width: 285px;
    height: 285px;
    left: -100px;
    top: -50px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    animation: fadeInLeft .7s ease; 
    background: #000;

    & > img {
        width: 100%;
    }
`

const SearchItemInfo = styled.div`
    position: absolute;
    top: 25px;
    right: 30px;
    width: 40%;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`

const SearchItemButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    right: 30px;
    border: none;
    box-shadow: 0.5px 0.5px 2px #323232;
    transition: all .4s ease;

    &:hover {
        background: #dcdcdc;
    }
`

const SearchItem = ({ name, id, image, setItemToDoData, isAdded, theme }) => {
    const onClickHadler = () => {
        setItemToDoData({name, id, image, date: new Date().toISOString()})
    }

    return (
        <SearchItemContainer style={{background: theme}}>
            <SearchItemSircleImage>
                <img src={image ? image : noImage} alt='Loading...' />
            </SearchItemSircleImage>

            <SearchItemInfo>
                {name}
            </SearchItemInfo>

            {
                !isAdded ?
                <SearchItemButton onClick={onClickHadler}>
                    <h1>+</h1>
                </SearchItemButton>
                :
                <SearchItemButton style={{animation: 'fadeInRight .5s ease'}}>
                    <img src={successImage} alt="Success" style={{transform: 'rotate(-10deg)'}}/>
                </SearchItemButton>
            }
            
        </SearchItemContainer>
    )
}

export default SearchItem;