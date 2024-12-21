import React, { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemDetailContainer/>
    </div>
    </>
  );
}

export default App
