import React from 'react';
import BreakBtn from '../BreakBtn/BreakBtn';

const AddBreak = () => {
    return (
        <div>
            <h2 className='text-xl font-bold'>Add A Break:</h2>
            <div className='bg-[#FFF5E4] mt-4 rounded-lg flex justify-between p-2 gap-1'>
                <BreakBtn id={10} time={10}></BreakBtn>
                <BreakBtn id={15} time={15}></BreakBtn>
                <BreakBtn id={20} time={20}></BreakBtn>
                <BreakBtn id={25} time={25}></BreakBtn>
                <BreakBtn id={30} time={30}></BreakBtn>
            </div>
        </div>
    );
};

export default AddBreak;