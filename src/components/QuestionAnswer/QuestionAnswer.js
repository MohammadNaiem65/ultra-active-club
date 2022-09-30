import React from 'react';
import { ComplexAnswer, SimpleAnswer } from '../QuestionAndAnswer/QuestionAndAnswer';

const QuestionAnswer = () => {
    const propsState = [{
        answer: '1. Props are used to pass data from one component to another where state is used to pass data within a component.'
    },
    {
        answer: '2. Props are immutable or read only data, it can’t be modified. State is mutable, it can be modified.'
    },
    {
        answer: '3. Props can be used with state and functional components. State can be used only with the state components/class component (Before 16.0).'
    },
    {
        answer: 'These are the core differences between Props and State.'
    }]

    const useEffectUse = [{
        answer: '1. useEffect() is used to validate input data. While a input is being stored in a state using useState, the validation takes place every time the input changes using useEffect(), giving immediate feedback to the user.'
    },
    {
        answer: '2. We can use useEffect to filter an array "on the fly" by typing letters into an input element.'
    },
    {
        answer: '3. We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it.'
    },
    {
        answer: '4. We can update paragraph list on fetched API data update using useEffect.'
    },
    ]
    return (
        <div className='mt-10'>
            <div className='bg-[#FFD1D1]'>
                <div className='w-3/4 mx-auto'>
                    <SimpleAnswer question='How does react work?' answer='ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. DOM is slow, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Then the browser DOM make changes to the website with that way.'></SimpleAnswer>

                </div>
            </div>
            <div>
                <div className='w-3/4 mx-auto'>
                    <ComplexAnswer question='Difference between Props and State.' answer={propsState}></ComplexAnswer>
                </div>
            </div>
            <div className='bg-[#FFD1D1]'>
                <div className='w-3/4 mx-auto'>
                    <ComplexAnswer question='What are the uses of useEffect accept for data load?' answer={useEffectUse}></ComplexAnswer>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;