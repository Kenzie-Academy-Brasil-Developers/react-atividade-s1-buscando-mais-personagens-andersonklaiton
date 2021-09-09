import { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';

function App() {

  const [characterList, setCharacterList]=useState([])
  const [actual, setActual]=useState("https://rickandmortyapi.com/api/character/?page=1")
  const [next, setNext]=useState("")
  const [previous, setPrevious]=useState("")

  useEffect(()=>{
      fetch(`${actual}`)
      .then((response)=> response.json())
      .then((response)=> {
        setCharacterList(response.results)
         setNext(response.info.next)
         setPrevious(response.info.prev)
        })
      .catch((err)=> console.log(err))
  },[actual])
  
  const nextPage=()=>{
    setActual(next)
  }
  const previousPage=()=>{
      setActual(previous)
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1>Rick and Morty Personagens</h1>
        <Characters characterList={characterList}/>
        <div className="btns">
          <button className="btnPrev" onClick={previousPage}>Anterior</button>
          <button className="btnNext" onClick={nextPage}>Próxima</button>
        </div>
      </div>
    </div>
  );
}

export default App;
