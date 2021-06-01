import React from 'react';
import {RatingValueType} from '../ControlledRating';

type ControlledStarPropsType = {
    value: RatingValueType
    selected: boolean
    onClick: (value: RatingValueType) => void
}

function ControlledStar(props: ControlledStarPropsType) {
    return <span onClick={() => {props.onClick(props.value)}}>{props.selected ? <b>star </b> : 'star '}</span>
}

export default ControlledStar;
