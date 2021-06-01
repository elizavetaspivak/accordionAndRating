import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import Select from './Select';
import {action} from '@storybook/addon-actions';



export default {
    title: 'Select',
    component: Select
} as Meta;

export const SelectChangeMode = () => {
    let [value, setValue] = useState(2)

    const onChange = (value: number) => setValue(value)

    return <Select value={value} onChange={onChange} items={[
        {title: 'Liza', value: 1},
        {title: 'Oksana', value: 2},
        {title: 'Kostya', value: 3}
    ]}/>}

