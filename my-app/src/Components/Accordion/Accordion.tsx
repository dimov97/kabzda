import React from 'react';

type accordionPropsType = {
    title: string
    collapsed:boolean
}

const Accordion = (props:accordionPropsType) => {
        return (
            <div>
                <AccordionTitle title={props.title} />
                {!props.collapsed && <AccordionBody/>}

            </div>
        )
};

type accordionTitlePropsType = {
    title:string
}
function AccordionTitle(props:accordionTitlePropsType ) {
    return <h3>{props.title}</h3>
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

export default Accordion;