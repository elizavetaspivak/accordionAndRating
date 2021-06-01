import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';



export default {
    title: 'Accordion',
    component: Accordion
} as Meta;

export const ChangeMode = () => {
    return <Accordion titleValue={'Menu'}/>}

