import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion mode changed')
export const MenuCollapsedMode = ()=> <Accordion title={'menu'} collapsed={true} onChange={callback}/>
export const UsersUncollapsedMode = ()=> <Accordion title={'users'} collapsed={false} onChange={callback}/>

export const ModeChanging = ()=> {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'users'} collapsed={value} onChange={()=>setValue(!value)}/>
}
