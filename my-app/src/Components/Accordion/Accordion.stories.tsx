import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion mode changed')
const onClickCallback = action('Some item was clicked')
export const MenuCollapsedMode = () => <Accordion title={'menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion title={'users'} collapsed={false} onChange={callback}
                                                     items={[{title: 'Di', value: 1},
                                                         {title: 'Va', value: 2},
                                                         {title: 'Art', value: 3}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'users'} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: 'Di', value: 1}, {title: 'Va', value: 2}, {title: 'Art', value: 3}]} onClick={(value)=>{alert(`user ${value} is happy !`)}}/>
}
