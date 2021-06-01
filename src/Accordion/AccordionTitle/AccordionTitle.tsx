import React from 'react';

type AccordionTitlePropsType = {
    title: string
    setCollapsed: any
    collapsed: any
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div onClick={() => {props.setCollapsed(!props.collapsed)}}>
            {props.title}
        </div>
    )
}

export default AccordionTitle;
