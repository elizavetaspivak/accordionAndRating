import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import ControlledAccordion, { ControlledAccordionPropsType } from './ControlledAccordion';
import {action} from '@storybook/addon-actions';



export default {
    title: 'components/Controlled Accordion',
    component: ControlledAccordion
} as Meta;

const callback = action('accordion mode change event fired')
const callback2 = action('some item was cliked')

const Template: Story<ControlledAccordionPropsType> = (args) => <ControlledAccordion {...args} />;

export const CollapsedMode2 = Template.bind({})
CollapsedMode2.args = {
    onClick: callback2,
    title: 'Menu',
    collapsed: true,
    onChange: callback,
    items: []
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    onClick: callback2,
    title: 'Menu',
    collapsed: false,
    onChange: callback,
    items: [
        {title: 'Liza', value: 1},
        {title: 'Oksana', value: 2},
        {title: 'Kostya', value: 3}
    ]
}

export const ChangeMode: Story<ControlledAccordionPropsType> = (args) => {
    let [value, setValue] = useState(true)
    return <ControlledAccordion {...args} collapsed={value} onChange={() => setValue(!value)}/>}

ChangeMode.args = {
    onClick: callback2,
    title: 'Menu',
    items: [
        {title: 'Liza', value: 1},
        {title: 'Oksana', value: 2},
        {title: 'Kostya', value: 3}
    ]
}

