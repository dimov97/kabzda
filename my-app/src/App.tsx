import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

function App() {
  return (
    <div className="App">
      <PageTitle title={"this is APP component"}/>
      <PageTitle title={"my friends"}/>
        <Rating value={3}/>
        <Accordion titleValue={"menu"} />
        <Accordion titleValue={"users"} />
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
