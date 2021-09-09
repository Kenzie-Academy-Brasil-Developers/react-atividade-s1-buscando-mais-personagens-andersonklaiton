import CharCard from "../CharCard"
import "./styles.css"
const characters=({characterList})=>{
    return(
        <>
            <h2>Meus personagens</h2>
            <div className="container">
                {characterList.map(char => <CharCard key={char.id} char={char}/>)}
            </div>
        </>
    )
}
export default characters