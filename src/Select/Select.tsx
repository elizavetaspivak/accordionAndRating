import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: number
}

type SelectPropsType = {
    value: number
    items: Array<ItemType>
    onChange: (value: number) => void
}


function Select(props: SelectPropsType) {
    let [active, setActive] = useState<boolean>(false)
    let [hoveredElement, setHoveredElement] = useState<number>(props.value)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElement)

    const changeSelect = () => setActive(!active)
    const onItemClick = (value: number) => {
        props.onChange(value);
        changeSelect();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown'){
            for(let i=0; i < props.items.length; i++){
                if(hoveredElement === props.items[i].value){
                    if (props.items[i + 1]){
                        props.onChange(props.items[i + 1].value)
                    }
                    return
                }
            }
        }
        if (e.key === 'ArrowUp'){
            for(let i=0; i < props.items.length; i++){
                if(hoveredElement === props.items[i].value){
                    if (props.items[i - 1]){
                        props.onChange(props.items[i - 1].value)
                    }
                    return;
                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter'){
            setActive(false)
        }
    }

    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0} >
            <h3 className={s.main}
                onClick={changeSelect}>
                {selectedItem && selectedItem.title}
            </h3>
            {active &&
            <div className={s.items}>
                {props.items.map(i => <div
                    onMouseEnter={() => setHoveredElement(i.value)}
                    className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                    key={i.value}
                    onClick={() => onItemClick(i.value)}>
                    {i.title}
                </div>)}
            </div>
            }
        </div>
    );
}

export default Select;
