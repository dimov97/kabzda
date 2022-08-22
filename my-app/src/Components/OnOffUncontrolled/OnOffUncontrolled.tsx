import React, {useState} from 'react';

type OnOffUncontrolledType = {
    onChange:(on: boolean)=>void
    defaultOn?:boolean
}


const OnOffUncontrolled = (props:OnOffUncontrolledType) => {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green': 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white': 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display:'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green': 'red'
    }
    const onClicked = ()=>{
        setOn(true)
        props.onChange(true)
    }
    const offClicked = ()=>{
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off</div>
            <div style={indicatorStyle}></div>

        </div>
    );
};

export default OnOffUncontrolled;