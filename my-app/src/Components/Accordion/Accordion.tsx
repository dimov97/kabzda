import React from 'react';

type accordionPropsType = {
    title: string
    collapsed:boolean
    onChange:()=>void
}

const Accordion = (props:accordionPropsType) => {
        return (
            <div>
                <AccordionTitle title={props.title}
                                onChange={props.onChange}
                />
                {!props.collapsed && <AccordionBody/>}

            </div>
        )
};

type accordionTitlePropsType = {
    title:string
    onChange:()=>void

}
function AccordionTitle(props:accordionTitlePropsType ) {
    return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
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