import React from 'react';

const Navbar = () => {
    return (
        <div>
            <section>
                <div className="navbar bg-blue-900 flex justify-between">
                    <div className="">
                        <a className="w-44"><img src="https://static.wixstatic.com/media/33bcdf_47e6188502d44700861dae271b77e564~mv2.png/v1/fill/w_215,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SecqurAIse%20-%20Logo%20-%20250px.png" alt="" /></a>
                    </div>
                    <div>
                        <div className="mr-64">
                            <button className="text-white">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </div>
                        <div className="mr-14">
                            <button class="btn btn-info bg-green-300">25</button>

                            <button class="btn btn-info bg-red-600 ml-7">25</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;