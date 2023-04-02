import React from 'react';

const Events = () => {
    return (
        <div>
            <section className='flex flex-col justify-center items-center'>
                <div className='flex gap-52 bg-slate-200 p-2 rounded-md'>
                    <h1 className='text-2xl font-semibold mr-14'>EVENTS</h1>
                    <span className='mt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" /></svg>
                    </span>
                </div>
                <div className='mx-10 p-1'>
                    <div className="card w-96 h-28 bg-base-200 rounded-none hover:bg-slate-300">
                        <div className="card-body">
                            <p className='flex justify-around'><span className='mr-16'>EVT0001: Chennai</span> <span><span>09-01-23</span> <span>13:37:13</span></span></p>
                            <p className='text-start'>person detechted</p>
                        </div>
                    </div>
                </div>
                <div className='mx-10 p-1'>
                    <div className="card w-96 h-28 bg-base-200 rounded-none hover:bg-slate-300">
                        <div className="card-body">
                            <p className='flex justify-around'><span className='mr-16'>EVT0001: Chennai</span> <span><span>09-01-23</span> <span>13:37:13</span></span></p>
                            <p className='text-start'>person detechted</p>
                        </div>
                    </div>
                </div>
                <div className='mx-10 p-1'>
                    <div className="card w-96 h-28 bg-base-200 rounded-none hover:bg-slate-300">
                        <div className="card-body">
                            <p className='flex justify-around'><span className='mr-16'>EVT0001: Chennai</span> <span><span>09-01-23</span> <span>13:37:13</span></span></p>
                            <p className='text-start'>person detechted</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;