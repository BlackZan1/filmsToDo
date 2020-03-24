import React, { Fragment, useState } from 'react';
import optionImg from '../../img/option.png';
import styled from 'styled-components';
import Modal from './Modal';

const OptionContainer = styled.div`
    position: absolute;
    top: 80px;
    right: 30px;
    opacity: 0.6;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > img {
        width: 45px;
    }
`

const Option = ({ onClickChangeTheme }) => {
    let [modalMode, setModalMode] = useState(false);

    const onClickHandler = () => {
        setModalMode(!modalMode)
    }

    return <Fragment>
        <OptionContainer onClick={onClickHandler} className='option-btn'>
            <img src={optionImg} alt="Option"/>
        </OptionContainer>

        {
            modalMode && <Modal closeModal={onClickHandler} onClickHandler={onClickChangeTheme} />
        }
    </Fragment>
} 


export default Option;