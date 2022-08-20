import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";

function App() {
  return (
    <div>
        <PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        <Rating value={3}/>
        <Accordion title={'Menu'}
                   collapsed={true}
        />
        <Accordion title={'Users'}
                   collapsed={false}
        />
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <OnOff on={false} />
        <OnOff on={true} />
        <OnOff on={false} />
    </div>
  );
}

type pageTitlePropsType = {
    title:string
}

function PageTitle(props:pageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
