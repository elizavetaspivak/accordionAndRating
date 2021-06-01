import React from 'react';
import {ItemType} from '../ControlledAccordion';

type ControlledAccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function ControlledAccordionBody(props: ControlledAccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li onClick={() => {
                    props.onClick(i.value)
                }} key={i.value}>{i.title}</li>)}
            </ul>
        </div>
    )
}

export default ControlledAccordionBody;
