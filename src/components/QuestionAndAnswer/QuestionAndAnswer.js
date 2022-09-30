import React from 'react';

const SimpleAnswer = props => {
    return (
        <div className='p-3'>
            <h1 className='text-2xl font-bold'>{props.question}</h1>
            <p className='p-3'>{props.answer}</p>
        </div>
    );
};

const ComplexAnswer = props => {
    const answers = props.answer;
    return (
        <div className='p-3'>
            <h1 className='text-2xl font-bold'>{props.question}</h1>
            <div className='p-3'>
                {
                    answers.map(answer => {
                        return <p className='mt-1'>{answer.answer}</p>
                    })
                }
            </div>
        </div>
    )

}

export { SimpleAnswer, ComplexAnswer };