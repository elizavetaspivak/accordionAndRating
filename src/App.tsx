import React, {useState} from 'react';
import './App.css';
import Rating from './Rating/Rating';
import Accordion from './Accordion/Accordion';
import ControlledRating, {RatingValueType} from './ControlledRating/ControlledRating';
import ControlledAccordion from './ControlledAccordion/ControlledAccordion';
import Select from './Select/Select';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapse, setCollapse] = useState<boolean>(false)

    let [value, setValue] = useState<number>(0)

    let onChange = (value: number) => {setValue(value) }


    return (
        <div className="App">
            {/*<Rating/>*/}
            {/*<Accordion titleValue={'Menu'}/>*/}
            {/*<ControlledRating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<ControlledAccordion onClick={alert} title={'Menu'} collapsed={collapse} onChange={setCollapse}*/}
            {/*                     items={[*/}
            {/*                         {title: 'Liza', value: 1},*/}
            {/*                         {title: 'Oksana', value: 2},*/}
            {/*                         {title: 'Kostya', value: 3}*/}
            {/*                     ]}/>*/}
            <Select onChange={onChange} value={value} items={[
                {title: 'Liza', value: 1},
                {title: 'Oksana', value: 2},
                {title: 'Kostya', value: 3}
            ]}/>
        </div>
    )
        ;
}

export default App;
