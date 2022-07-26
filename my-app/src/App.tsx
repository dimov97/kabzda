import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {ratingValueType} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import OnOffUncontrolled from "./Components/OnOffUncontrolled/OnOffUncontrolled";

function App() {
    let [ratingValue, setRatingValue] = useState<ratingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
  return (
    <div className={'App'}>
        <PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        <Rating value={ratingValue}
                onClick={setRatingValue}
        />

        <OnOff on={switchOn} onChange={setSwitchOn} />
        <UncontrolledAccordion title={'hello'} />
        <OnOffUncontrolled onChange={setSwitchOn} /> {switchOn.toString()}
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
