import React from 'react'
import data from './data.json'
import memory from './images/icon-memory.svg'
import reaction from './images/icon-reaction.svg'
import verbal from './images/icon-verbal.svg'
import visual from './images/icon-visual.svg'

const Result = () => {
  return (
    <div className='flex md:justify-center justify-start md:items-center items-start h-screen'>
        <div className='shadow-md shadow-black/20 rounded-3xl w-full md:w-auto'>
            <div className='flex flex-col md:flex-row'>
                {/* first box here */}
                <div className=' bg-gradient-to-b from-light-slate-blue to-light-royal-blue px-10 py-6 font-Hanken md:rounded-3xl rounded-b-3xl md:max-w-[300px] w-full'>
                    <h3 className='text-white opacity-50 text-lg text-center'>Your result</h3>
                    {/* for the circle */}
                    <div className='flex items-center justify-center my-4'>
                    <div className='rounded-full p-8 bg-gradient-to-b from-violet-blue to-persian-blue shadow-md origin-top-right'>
                        <h1 className='text-5xl font-bold text-white'>76</h1>
                        <h3 className='text-sm font-extralight text-white opacity-50 text-center'>of 100</h3>
                    </div>
                    </div>
                   
                    {/* for the write up outide the circle */}
                    <div className='flex items-center justify-center flex-col'>
                    <h1 className='text-white font-normal font-Hanken text-center text-xl mt-4'>Great</h1>
                    {/* for the write up underneath */}
                    <h3 className='text-center text-white text-sm font-extralight opacity-70 w-[70%]'>You scored higher than 65% of people that have taken these tests.</h3>
                    </div>

                </div>
                {/* the second box */}
                <div className='bg-white shadow-lg shadow-black/10 rounded-r-xl p-6'>
                    <h2 className='text-dark-gray-blue font-semibold font-Hanken text-lg'>Summary</h2>

                    {/* for the boxes under */}
                    <div className='flex flex-col gap-4 my-4 font-Hanken'>
                        {/* for the first box */}
                        <div className='flex flex-row bg-light-red bg-opacity-5 rounded-md p-3 gap-12'>
                            
                             {/* for the first set */}
                            <div className='flex flex-row gap-2'>
                                <img src={reaction} alt="reaction" />
                                <p className='text-light-red'>Reaction</p>
                            </div>

                            {/* for the second set */}
                                <div className='ml-auto'>
                                <p className='text-black font-semibold flex justify-end'>80  <span className='text-slate-400'> / 100</span></p>
                                </div>
                        </div>

                        {/* for the second box */}
                        <div className='flex flex-row bg-orange-yellow bg-opacity-5 rounded-md p-3 gap-12'>
                            
                                 {/* for the first set */}
                            <div className='flex flex-row gap-2'>
                                <img src={memory} alt="reaction" />
                                <p className='text-orange-yellow'>Memory</p>
                            </div>
                            {/* for the second set */}
                            <div className='ml-auto'>
                                <p className='text-black font-semibold'>92  <span className='text-slate-400'> / 100</span></p>
                            </div>
                           
                        </div>

                        {/* for the third box */}
                        <div className='flex flex-row bg-green-teal bg-opacity-5 rounded-md p-3 gap-12'>
                            
                                 {/* for the first set */}
                            <div className='flex flex-row gap-2'>
                                <img src={verbal} alt="reaction" />
                                <p className='text-green-teal'>Verbal</p>
                            </div>
                            {/* for the second set */}
                            <div className='ml-auto'>
                                <p className='text-black font-semibold'>61  <span className='text-slate-400'> / 100</span></p>
                            </div>
                           
                        </div>

                        {/* for the fourth box */}
                        <div className='flex flex-row bg-light-slate-blue bg-opacity-5 rounded-md p-3 gap-12'>
                            
                                 {/* for the first set */}
                            <div className='flex flex-row gap-2'>
                                <img src={visual} alt="reaction" />
                                <p className='text-light-slate-blue'>Visual</p>
                            </div>
                            {/* for the second set */}
                            <div className='ml-auto'>
                                <p className='text-black font-semibold'>72  <span className='text-slate-400'> / 100</span></p>
                            </div>
                           
                        </div>
                        {/* for the button created */}
                        <a href="" className='w-full rounded-full  hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue text-center font-semibold font-Hanken px-10 py-2 text-white bg-slate-700 transition-all'>Continue</a>
                    </div>

                        
                </div>
            </div>
        </div>

       {/* {data.datas.map((item) => (
        <h2>{item.category}</h2>
       ))} */}
    </div>
  )
}

export default Result