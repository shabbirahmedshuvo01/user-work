import React from 'react';
import biddut from "../../images/biddut.png"

const Home = () => {
    return (
        <section className='flex justify-evenly mx-20'>
            <div className='mt-10'>
                <p className='text-start text-xl my-2 font-bold'>EVT0001</p>
                <p className='text-start text-xl my-2 font-bold'>Person Detected</p>

                <div className='text-start my-2 font-semibold'>
                    <p className='flex justify-start'><span>Name</span><span><span className='ml-16'>:</span> <span>Female25</span></span></p>
                    <p className='flex justify-start'><span>Location</span><span><span className='ml-11'>:</span> <span>Chennai</span></span></p>
                    <p className='flex justify-start'><span>Date</span><span><span className='ml-16'>:</span> <span>29-Jan-23</span></span></p>
                    <p className='flex justify-start'><span>Time</span><span><span className='ml-16'>:</span> <span>13-32-13</span></span></p>
                </div>

                <div>
                    <h1 className='text-start font-semibold'>Description</h1>
                    <h1 className='text-start font-semibold'>Female25 Detected at <br /> Chennai on 9Th january, <br />2023</h1>
                </div>

            </div>
            <div className='my-3'>
                <p className='text-start text-2xl my-2 font-bold'>Male</p>
                <img src={biddut} alt="img" />
            </div>
        </section>
    );
};

export default Home;