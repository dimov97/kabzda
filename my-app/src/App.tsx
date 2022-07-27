import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <AppTitle />
        <Rating />
        <Accordion />
    </div>
  );
}

function AppTitle() {
    return <>this is react APP</>
}

function Rating() {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Star() {
    return <div>star</div>
}


export default App;
