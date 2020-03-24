import React, { useState, useEffect } from 'react';
import { BigTitle } from '../StyledComponents/Titles';
import { ContainerLayout } from '../StyledComponents/Layouts';
// import AwesomeSlider from 'react-awesome-slider';
import WrapperItem from './WrapperItem/WrapperItem';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { usePages } from '../utils/arrayToPages';
import Confetti from 'confetti-js';
import { useTheme } from '../utils/themeConfig';
import Option from '../Option/Option';

const WrapperList = styled.div`
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
`

const WrapperPaginator = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0 40px;
`

const Wrapper = ({ films, setToDoData }) => {
    let { themeData: {rightTheme}, themes, changeTheme } = useTheme();
    let [ success, setSuccess ] = useState(false);
    let { pages, currentPage, changeCurrentPage, arrayToPages } = usePages();
    
    const onClickChangeTheme = (key) => {
        changeTheme(key, 'rightTheme');
    }

    useEffect(() => {
        if(films.length) {
            arrayToPages(films)
        }
    }, [films, arrayToPages])

    useEffect(() => {
        if(success) {
            let settings = {target:"confetti", max:"140",size:"1",animate:true,props:["square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:"130",rotate:true,width:"1920",height:"969",start_from_edge:true,respawn:false};
            let confetti = new Confetti(settings);

            confetti.clear();

            setTimeout(() => {
                setSuccess(false);
            }, 1000)
        }
    }, [success])

    const onClickHandler = (ev) => {
        document.querySelectorAll('.page').forEach(el => {
            el.classList.remove('clicked');
        })

        ev.currentTarget.classList.add('clicked');

        changeCurrentPage((+ev.currentTarget.textContent - 1));
    }

    const deleteItemHandler = (id) => {
        pages.forEach(p => p.filter(i => i.id !== id));

        setToDoData(films.filter(i => i.id !== id));
    }

    const successHandler = (id) => {
        pages.forEach(p => p.filter(i => i.id !== id));

        setToDoData(films.filter(i => i.id !== id));
        setSuccess(true)
    }

    return (
        <ContainerLayout style={{background: themes[rightTheme].bg, position: 'relative'}}>
            <Option onClickChangeTheme={onClickChangeTheme} />
            
            <BigTitle>
                Want to Watch
            </BigTitle>

            <h1 style={{alignSelf: 'center', marginBottom: '30px'}}>Today</h1>

            {/* <AwesomeSlider className='search-slider'>
                <div data-src={'https://thumbs.dfs.ivi.ru/storage8/contents/0/a/4bde2168ae0492042f253f6bffeda1.jpg/234x360/'}>
                    <p className={'caption--1hwV'} style={{background: '#fff', width: '50%', }}>Alladin</p>
                </div>
                <div data-src={''}></div>
                <div data-src={''}></div>
                <div data-src={''}></div>
            </AwesomeSlider> */}

            <WrapperList>
                <WrapperPaginator>
                    {
                        pages.length ? 
                            pages.map((item, index) => {
                                return <div key={index} className={!index ? 'page clicked' : 'page'} onClick={onClickHandler}>{index + 1}</div>
                            })
                        :
                        null
                    }
                </WrapperPaginator>

                
                {
                    pages.length ? (
                        <TransitionGroup>
                            {
                                pages[currentPage].map(i => {
                                    return (
                                        <CSSTransition key={i.id} timeout={800} classNames={'item'}>
                                            <WrapperItem 
                                                name={i.name} 
                                                image={i.image} 
                                                id={i.id} 
                                                date={i.date}
                                                theme={themes[rightTheme].window} 
                                                deleteToDoItem={deleteItemHandler}
                                                successHandler={successHandler}
                                            />
                                        </CSSTransition>
                                    )
                                })
                            }
                            </TransitionGroup>
                        )
                    :
                    <div style={{margin: '10px auto', textAlign: 'center', border: '2px solid #fff', borderRadius: '20px', padding: '10px 20px'}}>
                        <h2>No planned films</h2>
                        <h3 style={{color: 'navy'}}>Let's search!</h3>
                    </div>
                }
            </WrapperList>
 
            {/* <canvas id={'confetti'} className='abs-confetti' width={700} height={1200}></canvas> */}
        </ContainerLayout>
    )
}

export default Wrapper;