import React from 'react';
import { BiHome } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io'
import { BsChatDots } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'

const Navbar = () => {
    return (
        <div class="navbar bg-error">
            <div class="navbar-start pl-15">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <div class="form-control">
                            <input type="text" placeholder="Search" class="input input-bordered rounded-circle" />
                        </div>

                    </ul>
                </div>
                <div className='mx-2 lg:mx-auto'><img className='w-24' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/2560px-Facebook.svg.png" alt="" /></div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <div class="form-control text-black w-64 ">
                        <input type="text" placeholder="Search" className="input rounded-full text-black h-10" />
                    </div>
                    <div className='flex px-10 py-2 gap-10'>
                        <BiHome className='text-white' />
                        <IoIosPeople className='text-white' />
                        <MdNotificationsNone className='text-white' />
                        <BsChatDots className='text-white' />
                    </div>
                </ul>
            </div>
            <div class="navbar-end pr-0 md:pr-24">
                <div class="flex-none text-white">
                    <ul class="menu menu-horizontal p-0">
                        <li tabindex="0">
                            <a>
                                <div class="avatar online">
                                    <div class="w-8 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                Adnan <span className='hidden md:block'>Chowdhury</span>
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2 bg-error w-48 z-10">
                                <li><a>Profile</a></li>
                                <li><a>Feeds</a></li>
                                <li><a>Friends</a></li>
                                <li><a>Groups</a></li>
                                <li><a>Pages</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;