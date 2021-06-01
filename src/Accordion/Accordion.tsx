import React, {useReducer} from 'react';
import AccordionBody from './AccordionBody/AccordionBody';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {
    //let [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={() => dispatch({type: TOGGLE_COLLAPSED})} collapsed={state.collapsed}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

export default Accordion;