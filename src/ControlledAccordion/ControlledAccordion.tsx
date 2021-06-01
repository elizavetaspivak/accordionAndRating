import React, {useState} from 'react';
import ControlledAccordionBody from './ControlledAccordionBody/ControlledAccordionBody';
import ControlledAccordionTitle from './ControlledAccordionTitle/ControlledAccordionTitle';

 export type ItemType = {
    title: string
    value: any
}

export type ControlledAccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: (collapse: boolean) => void
    /**
     * Elements that are showed when accordion is opened (not collapsed)
     */
    items: Array<ItemType>
    onClick: (value: any) => void
}

function ControlledAccordion(props: ControlledAccordionPropsType) {
    return (
        <div>
            <ControlledAccordionTitle title={props.title} onChange={props.onChange} collapse={props.collapsed}/>
            { !props.collapsed && <ControlledAccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
    )
}

export default ControlledAccordion;