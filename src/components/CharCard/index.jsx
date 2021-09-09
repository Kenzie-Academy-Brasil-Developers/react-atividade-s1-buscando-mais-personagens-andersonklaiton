import "./styles.css"
const charCard=({char:{name, image, status, species, gender}})=>{
    return(
        <div id="card" className={status==="Alive"? "alive" : status==="Dead"?"dead" : "unknow"} >
            <label className="name">{name}</label>
            <img className="picture"  src={image} alt={name}></img>
        </div>
    )
}
export default charCard