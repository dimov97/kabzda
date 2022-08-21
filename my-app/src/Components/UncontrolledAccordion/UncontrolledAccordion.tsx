import React, {useState} from 'react';

type UncontrolledAccordionType = {
    title: string
}

const UncontrolledAccordion = (props:UncontrolledAccordionType) => {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}} />
            {!collapsed && <AccordionBody/>}
        </div>
    );
};
type accordionTitlePropsType = {
    title:string
    onClick:()=>void
}
function AccordionTitle(props:accordionTitlePropsType ) {
    return <h3 onClick={()=>{props.onClick()}}>
        {props.title}
    </h3>
}
function AccordionBody() {
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}

export default UncontrolledAccordion;