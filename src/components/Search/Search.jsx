import React, { useState, Fragment } from 'react';
import { BigTitle } from '../StyledComponents/Titles';
import { ContainerLayout } from '../StyledComponents/Layouts';
import { Input } from '../StyledComponents/Inputs';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchButton } from '../StyledComponents/Buttons';
import { getFilmsByTitle } from '../../api/api';
import SearchResult from './SearchResult';
import { SimpleLoader } from '../StyledComponents/Loaders.jsx';
import styled from 'styled-components';
import Option from '../Option/Option';
import { useTheme } from '../utils/themeConfig';

const SearchIntro = styled.div`
    line-height: 10px;
    margin: 200px auto;
    text-align: center;
`

const Search = ({ setSearchData, films, setItemToDoData, toDoData }) => {
    let [ searchTitle, setSearchTitle ] = useState('');
    let [ isFetching, setFetching ] = useState(null); 
    let { themeData: {leftTheme}, themes, changeTheme } = useTheme();

    const onClickChangeTheme = (key) => {
        changeTheme(key, 'leftTheme');
    }

    const addFilms = (data) => {
        setSearchData(data || []);
        setFetching(false); 
    }

    const onChangeHadler = (ev) => setSearchTitle(ev.currentTarget.value);

    const SearchHandler = (ev) => {
        setFetching(true);

        if(ev.keyCode === 13 || ev.type === 'click') {
            getFilmsByTitle(searchTitle)
            .then(res => {
                addFilms(res);
            })
        }
    }

    return (
        <ContainerLayout style={{background: themes[leftTheme].bg}}>
            <Option onClickChangeTheme={onClickChangeTheme} />

            <BigTitle>
                Search film
            </BigTitle>

            <div style={{ margin: '0 auto', position: 'relative'}}>
                <Input placeholder='Film name' onChange={onChangeHadler} onKeyDown={SearchHandler} value={searchTitle} />

                {
                    searchTitle.length ? (
                        <SearchButton className='search-btn' onClick={SearchHandler}>
                            <FontAwesomeIcon icon={faSearch} />
                        </SearchButton>
                    ) : null
                }
            </div>

            {
                isFetching !== null ? <Fragment>
                    {
                        !isFetching ?
                        <SearchResult 
                            films={films} 
                            setItemToDoData={setItemToDoData} 
                            toDoData={toDoData} 
                            theme={themes[leftTheme].window}
                        />
                        :
                        <SimpleLoader />
                    }
                </Fragment> 
                :
                <SearchIntro>
                    <h2>There are many films</h2>
                    <h3>Just search</h3>
                    <h4>-Insomnia</h4>
                </SearchIntro>
            }
        </ContainerLayout>
    )
}

export default Search;