import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {ratingValueType} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";

function App() {
    let [ratingValue, setRatingValue] = useState<ratingValueType>(3)
  return (
    <div className={'App'}>
        <PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        <Rating value={ratingValue}
                onClick={setRatingValue}
        />
        <Accordion title={'Menu'}
                   collapsed={true}
        />
        <Accordion title={'Users'}
                   collapsed={false}
        />
        <OnOff on={false} />
        <OnOff on={true} />
        <OnOff on={false} />
        <UncontrolledAccordion title={'hello'} />
        <UncontrolledRating />
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
