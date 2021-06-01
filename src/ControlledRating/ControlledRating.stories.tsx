import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import ControlledRating, {RatingValueType} from './ControlledRating';



export default {
    title: 'Controlled Rating',
    component: ControlledRating
} as Meta;


export const EmptyStar = () => <ControlledRating value={0} onClick={() => {}}/>
export const Rating1 = () => <ControlledRating value={1} onClick={() => {}}/>
export const Rating2 = () => <ControlledRating value={2} onClick={() => {}}/>
export const Rating3 = () => <ControlledRating value={3} onClick={() => {}}/>
export const Rating4 = () => <ControlledRating value={4} onClick={() => {}}/>
export const Rating5 = () => <ControlledRating value={5} onClick={() => {}}/>
export const ChangeRating = () => {
    let [rating, setRating] = useState<RatingValueType>(0)
    return <ControlledRating value={rating} onClick={setRating}/>}
