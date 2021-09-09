import { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';

function App() {

  const [characterList, setCharacterList]=useState([])
  const [next, setNext]=useState("https://rickandmortyapi.com/api/character/")

  useEffect(()=>{
    if(next!==null){
      fetch(`${next}`)
      .then((response)=> response.json())
      .then((response)=> {
        setCharacterList([...characterList, ...response.results])
        setNext(response.info.next)
        })
      .catch((err)=> console.log(err))
    }
  },[next])
  return (
    <div className="App">
      <div className="App-header">
        <h1>Rick and Morty Personagens</h1>
        <Characters characterList={characterList}/>
        <button className="top"><a href="#top">Top</a></button>
      </div>
    </div>
  );
}

export default App;
