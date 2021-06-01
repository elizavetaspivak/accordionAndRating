import React from 'react';

type ControlledAccordionTitleTitlePropsType = {
    title: string
    onChange: (collapse: boolean) => void
    collapse: boolean
 }

function ControlledAccordionTitle(props: ControlledAccordionTitleTitlePropsType) {
    return (
        <div onClick={(e) => {props.onChange(!props.collapse)}}>
            {props.title}
        </div>
    )
}

export default ControlledAccordionTitle;
