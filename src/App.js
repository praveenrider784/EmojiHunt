import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import Emoji from './emoji.json'

function App() {
const [search,setSearch]=useState('');
const [data,setData]=useState([]);
useEffect(()=>{
  const New = Emoji.filter(emoji=>emoji.title.toLowerCase().includes(search.toLowerCase()));
 setData(New);
},[search])
  return (
    <div className="App">
      <h1 className="heading">Emoji Hunt</h1>
      <h3 className="heading">~Praveen</h3>
      <input  className="searchbox heading"  type="text" placeholder="search" name="search" value={search} onChange={e=>setSearch(e.target.value)} />
      {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Praveen ,says Emoji has been copied!!!!")}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}
      
    </div>
  )
}


export default App;
