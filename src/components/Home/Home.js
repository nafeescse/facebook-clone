import React from 'react';
import { FiSave } from 'react-icons/fi'
import { BsPeopleFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { RiPagesLine } from 'react-icons/ri'
import { MdOutlineEventAvailable } from 'react-icons/md'

const Home = () => {
    return (
        <div className='bg-base-300 px-32 py-3 flex justify-between'>


            <div className=''>
                <div class="card w-64 bg-base-100 shadow-xl rounded-md mb-2">
                    <div class="card-body">
                        <h2 class="card-title font-bold">Explore</h2>
                        <div className='flex items-center gap-2'><FiSave></FiSave>  Saved Posts</div>
                        <div className='flex items-center gap-2'><CgProfile></CgProfile>  People</div>
                        <div className='flex items-center gap-2'><BsPeopleFill></BsPeopleFill>  Groups</div>
                        <div className='flex items-center gap-2'><RiPagesLine></RiPagesLine>  Pages</div>
                        <div className='flex items-center gap-2'><MdOutlineEventAvailable></MdOutlineEventAvailable>  Events</div>

                    </div>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl rounded-md mb-2">
                    <div class="card-body">
                        <h2 class="card-title font-bold">Download App</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82JqLN5tgWyq_YM0JVYzCF2bY0Da_I9f5ZCfgKemSAkmLyLgiRlbfbWyvwq0bjoSe0Uo&usqp=CAU" alt="" />

                    </div>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl rounded-md mb-2">
                    <div class="card-body">
                        <h2 class="font-bold text-lg ">Suggested People</h2>
                        <div className='flex items-center gap-1 py-2'>
                            <div class="avatar mr-2">
                                <div class="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            Sadek Hussain
                            <button class="ml-1 btn btn-outline btn-xs ">Add</button>
                        </div>


                    </div>
                </div>
            </div>
            <div className=''>
                <div class="card w-64 bg-base-100 shadow-xl rounded-md mb-2">
                    <div class="card-body">
                        <h2 class="card-title font-bold">Explore</h2>
                        <div className='flex items-center gap-2'><FiSave></FiSave>  Saved Posts</div>
                        <div className='flex items-center gap-2'><CgProfile></CgProfile>  People</div>
                        <div className='flex items-center gap-2'><BsPeopleFill></BsPeopleFill>  Groups</div>
                        <div className='flex items-center gap-2'><RiPagesLine></RiPagesLine>  Pages</div>
                        <div className='flex items-center gap-2'><MdOutlineEventAvailable></MdOutlineEventAvailable>  Events</div>

                    </div>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl rounded-md mb-2">
                    <div class="card-body">
                        <h2 class="card-title font-bold">Download App</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82JqLN5tgWyq_YM0JVYzCF2bY0Da_I9f5ZCfgKemSAkmLyLgiRlbfbWyvwq0bjoSe0Uo&usqp=CAU" alt="" />

                    </div>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl rounded-md mb-2">
                    <div class="card-body">
                        <h2 class="font-bold text-lg ">Suggested People</h2>
                        <div className='flex items-center gap-1 py-2'>
                            <div class="avatar mr-2">
                                <div class="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            Sadek Hussain
                            <button class="ml-1 btn btn-outline btn-xs ">Add</button>
                        </div>


                    </div>
                </div>
            </div>
            <div className=''>
                <div class="card w-64 bg-base-100 shadow-xl rounded-md mb-2">
                    <div class="card-body">
                        <h2 class="font-bold text-lg ">You Might Like</h2>
                        <div class="divider"></div>
                        <div className='flex items-center gap-1 py-2'>
                            <div class="avatar mr-2">
                                <div class="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            Sadek Hussain

                        </div>
                        <div className='flex'>
                            <button class="ml-1 btn btn-outline ">Ignore</button>
                            <button class="ml-1 btn btn-error">Follow</button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;