import React from 'react';
import SearchItem from './SearchItem/SearchItem';
import styled from 'styled-components';

const SearchResultContainer = styled.div`
    margin: 60px auto 0;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`

const SearchResult = ({ films, toDoData, setItemToDoData, theme }) => {
    return <SearchResultContainer>
        {
            films.length ? films.map(f => {
                let isAdded = toDoData.some(i => i.id === f.imdbID);

                return <SearchItem 
                    isAdded={isAdded} 
                    name={f.Title} 
                    key={f.imdbID} 
                    id={f.imdbID} 
                    image={f.Poster} 
                    setItemToDoData={setItemToDoData} 
                    theme={theme}
                />
            })
            :
            <p style={{fontWeight: '500', fontSize: '22px', marginTop: '150px'}}>No results :(</p>
        }
    </SearchResultContainer>
}

export default SearchResult;