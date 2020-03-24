import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTheme } from '../utils/themeConfig';

const ModalContainer = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; 
    z-index: 9999;
`

const ModalBody = styled.div`
    width: 350px;
    height: 90%;
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background: #fff;
    border-radius: 15px;
    margin-top: 100px;
`

const ColorItem = styled.div`
    margin: 20px 0;
    width: 300px;
    max-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    border-radius: 10px;
    transition: all .5s ease;
    cursor: pointer;
    position: relative;

    &:hover {
        box-shadow: 1px 1px 6px #dcdcdc;
    }

    & > p {
        position: absolute;
        font-size: 22px;
        text-transform: uppercase;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;

        &::before {
            content: '';
            height: 2px;
            width: 100%;
            background: #323232;
            display: block;
            position: absolute; 
            bottom: 12px;
            right: -115%;
        }
    }
`

const ColorCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px 0 0 10px;
    box-shadow: 1px 1px 7px #dcdcdc;
`

const Modal = ({ onClickHandler, closeModal }) => {
    let { values, keys } = useTheme();

    const choiseColor = (index) => {
        let key = keys[index];

        closeModal();
        onClickHandler(key);
    }

    return (
        <ModalContainer onClick={() => closeModal()}>
            <TransitionGroup>
                <CSSTransition classNames={'item'} timeout={650}>
                    <ModalBody>
                        <h2>Choise theme variant</h2>

                        <div>
                            {
                                values.map((v, index) => {
                                    return (
                                        <ColorItem onClick={() => choiseColor(index)}>
                                            <ColorCircle style={{background: v.bg}} />
                                            <ColorCircle style={{background: v.window}} />

                                            <p>{keys[index]}</p>
                                        </ColorItem>
                                    )
                                })
                            }
                        </div>
                    </ModalBody>
                </CSSTransition>
            </TransitionGroup>
        </ModalContainer>
    )
}

export default Modal;