import React from 'react';
import ControlledStar from './ControlledStar/ControlledStar';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type ControlledRatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}


function ControlledRating(props: ControlledRatingPropsType) {
    return (
        <div>
            <ControlledStar selected={props.value > 0} onClick={props.onClick} value={1}/>
            <ControlledStar selected={props.value > 1} onClick={props.onClick} value={2}/>
            <ControlledStar selected={props.value > 2} onClick={props.onClick} value={3}/>
            <ControlledStar selected={props.value > 3} onClick={props.onClick} value={4}/>
            <ControlledStar selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    );
}

export default ControlledRating;
