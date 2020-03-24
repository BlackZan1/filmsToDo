import React, { useState, useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Search from './components/Search/Search';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import styled from 'styled-components';
import { FilmsContext } from './context/Films.context';
import { toDoContext } from './context/toDo.context';
import './App.css';

const FlexContainer = styled.div`
  display: flex;
  flex: 2
`

const App = () => {
  let searchFilms = useContext(FilmsContext);
  let toDo = useContext(toDoContext);

  let [mainData, setMainData] = useState({
    search: [...searchFilms.data],
    toDo: [...toDo.data]
  })

  useEffect(() => {
    if(mainData.search.length && mainData.toDo.length) {
      let search = mainData.search;
      let toDo = mainData.toDo;

      searchFilms.data = search;
      toDo.data = toDo;

      localStorage.setItem('insomniaData', JSON.stringify(toDo))
    }
  }, [mainData, searchFilms, toDo])

  const setSearchData = (data) => {
    setMainData(prev => ({
      ...prev,
      search: [...data]
    }))
  }

  const setItemToDoData = (item) => {
    setMainData(prev => ({
      ...prev,
      toDo: [...prev.toDo, item]
    }))
  }

  const setToDoData = (data) => {
    setMainData(prev => ({
      ...prev,
      toDo: [...data]
    }))
  }

  const deleteToDoItem = (id) => {
    setMainData(prev => ({
      ...prev,
      toDo: prev.toDo.filter(i => i.id !== id)
    }))
  }
  
  return (
    <>
      <Header />

      <Switch>
        <Route path={'/film/?:id'} />
        <Route path={'/'}>
          <FlexContainer>
            <Search 
              setSearchData={setSearchData} 
              setItemToDoData={setItemToDoData} 
              films={mainData.search}
              toDoData={mainData.toDo}
            />

            <Wrapper 
              setToDoData={setToDoData} 
              films={mainData.toDo} 
              deleteToDoItem={deleteToDoItem}
            />
          </FlexContainer>
        </Route>

        <Redirect to={'/'} />
      </Switch>
    </>
  );
}

export default App;
