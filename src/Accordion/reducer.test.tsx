import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';
import {action} from '@storybook/addon-actions';

test('collapsed should be true', () => {
    //data
    const state:StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true)

})

test('should be error', () => {
    //data
    const state:StateType = {
        collapsed: true
    }

    //action
    expect(() => {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError();

})