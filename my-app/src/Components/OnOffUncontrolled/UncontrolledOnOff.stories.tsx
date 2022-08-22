import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import OnOffUncontrolled from "./OnOffUncontrolled";

export default {
    title: 'OnOffUncontrolled',
    component: OnOffUncontrolled,
}

const callback = action('on or off clicked')
export const OnMode = ()=> <OnOffUncontrolled defaultOn={true} onChange={callback}/>
export const OffMode = ()=> <OnOffUncontrolled defaultOn={false} onChange={callback}/>

