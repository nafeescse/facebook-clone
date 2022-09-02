import React from 'react';
import { FiSave } from 'react-icons/fi'
import { BsPeopleFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { RiPagesLine } from 'react-icons/ri'
import { MdOutlineEventAvailable } from 'react-icons/md'

const Home = () => {
    return (
        <div className='bg-base-300 px-40 py-3'>


            <div class="card w-56 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="card-title fw-bold">Explore</h2>
                    <div className='flex items-center gap-2'><FiSave></FiSave>  Saved Posts</div>
                    <div className='flex items-center gap-2'><CgProfile></CgProfile>  People</div>
                    <div className='flex items-center gap-2'><BsPeopleFill></BsPeopleFill>  Groups</div>
                    <div className='flex items-center gap-2'><RiPagesLine></RiPagesLine>  Pages</div>
                    <div className='flex items-center gap-2'><MdOutlineEventAvailable></MdOutlineEventAvailable>  Events</div>
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Home;