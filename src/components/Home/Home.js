import React from 'react';
import { FiSave } from 'react-icons/fi'
import { BsPeopleFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { RiPagesLine } from 'react-icons/ri'
import { CgDarkMode } from 'react-icons/cg'
import { BsCamera } from 'react-icons/bs'
import { RiEarthFill } from 'react-icons/ri'
import { BsEmojiSunglasses } from 'react-icons/bs'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { MdOutlineEventAvailable } from 'react-icons/md'
import { BiLike } from 'react-icons/bi'
import { BiComment } from 'react-icons/bi'
import { BiLink } from 'react-icons/bi'
import { MdGif } from 'react-icons/md'
import { BiShare } from 'react-icons/bi'
import { BsEmojiWink } from 'react-icons/bs'
import { GiSelfLove } from 'react-icons/gi'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <div className='bg-base-300 px-32 py-3 flex justify-center gap-2'>


                {/* Left Sidebar */}
                <div className='hidden lg:block'>
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
                                <small>
                                    Sadek Hussain
                                </small>
                                <button class="ml-1 btn btn-outline btn-xs ">Add</button>
                            </div>


                        </div>
                    </div>
                </div>


                {/* Center */}

                <div className=''>
                    {/* Stories */}
                    <div className='mb-2 flex gap-2'>
                        <div class="card w-[122px] md:w-32 h-[180px] 0lg:card-side bg-white rounded-md">
                            <figure><img className='h-100' src="https://www.kindpng.com/picc/m/65-653274_workers-compensation-law-social-security-disability-user-icon.png" alt="Album" /></figure>
                            <div className='bg-[#3B3B3B] h-24 rounded-t-2xl text-center text-white pt-3 static'>
                                <div class="absolute bottom-9 left-12 badge badge-primary font-bold">+</div>
                                <small>Your Story</small>
                            </div>
                        </div>


                        <div class="card w-[122px] md:w-32 h-[180px] 0lg:card-side rounded-md flex items-center justify-center bg-[#9c9a9a]">
                            <div class="avatar absolute top-1 right-2">
                                <div class="w-7 rounded-full">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                </div>
                            </div>
                            <figure><img className='h-100 pt-3' src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                            <small className='text-center  pt-2 text-white font-bold'>Adnan Chowdhury</small>
                        </div>


                        <div class="card w-[122px] md:w-32 h-[180px] 0lg:card-side rounded-md flex items-center justify-center bg-[#9c9a9a]">
                            <div class="avatar absolute top-1 right-2">
                                <div class="w-7 rounded-full">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                </div>
                            </div>
                            <figure><img className='h-100 pt-3' src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                            <small className='text-center  pt-2 text-white font-bold'>Kazi Shishir</small>
                        </div>



                    </div>
                    {/* Posts */}
                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div class="form-control w-11/12">
                                    <input type="text" placeholder="Create a new post..." className='input input-bordered rounded-full' />
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div className='flex items-center gap-3 justify-around font-bold text-sm lg:text-lg'>
                                <div className='flex items-center gap-2'>
                                    <CgDarkMode /> Background
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsCamera /> Photo/Video
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BsEmojiSunglasses /> Feeling/Activity
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2 flex">
                        <div class="card-body flex justify-start gap-2">
                            <p className='font-bold text-red-700'>Public post
                                <span className='font-bold text-black pl-5'>Friend post</span></p>

                        </div>
                    </div>


                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold'>Adnan Chowdhury</p>
                                    <small className='flex items-center gap-1'>1 hours ago <RiEarthFill /></small>
                                </div>

                            </div>
                            <p>Your favourite game</p>
                            <div className='flex items-center justify-between gap-2'>
                                <input type="checkbox" checked="checked" className="checkbox" />
                                <div className='bg-[#e0dada]  text-black p-2 rounded-md ml-2 w-3/4'>
                                    Added by you <br /> Football
                                </div>
                                <div class="avatar flex flex-col items-center">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                    <small>1 vote</small>
                                </div>
                                <div class="w-7 rounded-full bg-slate-400 text-black text-center">
                                    x
                                </div>
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <input type="checkbox" checked="checked" class="checkbox" />
                                <div className='bg-[#e0dada]  text-black p-2 rounded-md ml-2 w-3/4'>
                                    Added by you <br /> Cricket
                                </div>
                                <div class="avatar flex flex-col items-center">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                    <small>1 vote</small>
                                </div>
                                <div class="w-7 rounded-full bg-slate-400 text-black text-center">
                                    x
                                </div>
                            </div>
                            <div className='flex items-center justify-between gap-2 pb-10'>
                                <input type="checkbox" checked="checked" class="checkbox" />
                                <div className='bg-[#e0dada]  text-black p-2 rounded-md ml-2 w-3/4'>
                                    Added by you <br /> Badminton
                                </div>
                                <div class="avatar flex flex-col items-center">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                    <small>1 vote</small>
                                </div>
                                <div class="w-7 rounded-full bg-slate-400 text-black text-center">
                                    x
                                </div>
                            </div>
                            <p className='flex justify-end text-black'>1 comment</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <BiLike /> Like
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                            <div className='flex justify-start items-start gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div className='flex flex-col p-1 rounded-md bg-stone-100'>
                                    <p className='font-bold'>Adnan Chowdhury</p>
                                    <img src="https://i.pinimg.com/originals/1b/21/a6/1b21a61901f6ec632437212bf2d69fb3.jpg" alt="" className='w-48' />
                                    <div className='flex text-sm font-bold gap-2 py-2 bg-white'>
                                        <p>Like</p>
                                        <p>Reply</p>
                                        <p>54 minutes ago</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2 pl-14'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>



                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Adnan Chowdhury <small className='flex items-center gap-2 text-slate-500'> <BsEmojiWink /> is feeling ok</small></p>
                                    <small className='flex items-center gap-1'>1 hours ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-40'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p>Have a good day !</p>
                            <div className='flex  gap-2'>
                                <img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__480.jpg" alt="" className='w-1/2' />
                                <img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__480.jpg" alt="" className='w-1/2' />
                            </div>
                            <div className='flex gap-2 pr-2'>
                                <img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__480.jpg" alt="" className='w-1/3' />
                                <img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__480.jpg" alt="" className='w-1/3' />
                                <img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__480.jpg" alt="" className='w-1/3' />
                            </div>
                            <p className='flex items-center gap-2 justify-start text-black'> <GiSelfLove className='text-[red]' /> You</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2 text-[red]'>
                                    <GiSelfLove /> Like
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>



                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2 text-xs md:text-lg'>Alfred Parchment <small className='flex items-center gap-2 text-slate-500 text-xs md:text-lg'> Updated her profile picture</small></p>
                                    <small className='flex items-center gap-1'>17 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-24'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <div className='flex gap-2'>
                                <img src="https://placeimg.com/580/580/arch" alt="" />
                            </div>

                            <p className='flex items-center gap-2 justify-start text-black'> <GiSelfLove className='text-[red]' /> 3</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2 text-[red]'>
                                    <GiSelfLove /> Like
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2 text-xs md:text-lg'>Shakil Ahmed <span className='flex items-center gap-2 text-black text-xs md:text-lg'><FaArrowAltCircleRight /> BLACK BUSINESS OWNERS</span></p>
                                    <small className='flex items-center gap-1'>21 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-20'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p className='text-lg'>Hi everyone</p>

                            <div className='flex justify-between'>
                                <p className='flex items-center gap-2 justify-start text-black'> <GiSelfLove className='text-[red]' /> 6</p>
                                <p className='flex items-center gap-2 justify-end text-black'>1 comment</p>
                            </div>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2 text-[red]'>
                                    <GiSelfLove /> Like
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Flo Pharoah</p>
                                    <small className='flex items-center gap-1'>23 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p className='text-justify'>Since Im detoxing and my head is becoming clearer, It's time for me to dive into this book! It's a selt-reflecctive book! You write into it with all honesty about yourself and the people around you and the ways you could change or helkp certain situations! It's a book of self-control and deiscipline . I highly recommend!!</p>
                            <div className='flex gap-2'>
                                <img src="https://placeimg.com/580/580/arch" alt="" />
                            </div>

                            <p className='flex items-center gap-2 justify-start text-black'> <GiSelfLove className='text-[red] underline' /> You and 2 others</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2 text-[red]'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>



                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Habib Hossain</p>
                                    <small className='flex items-center gap-1'>24 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <div className='flex gap-2'>
                                <img src="https://placeimg.com/580/380/arch" alt="" />
                            </div>

                            <div className='flex justify-between'>
                                <p className='flex items-center gap-2 justify-start text-black'> <GiSelfLove className='text-[red]' /> You and 5 others</p>
                                <p className='flex items-center gap-2 justify-end text-black'>1 comment</p>
                            </div>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2 text-[red]'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Flo Pharoah</p>
                                    <small className='flex items-center gap-1'>25 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p className='text-justify'>Since Im detoxing and my head is becoming clearer, It's time for me to dive into this book! It's a selt-reflecctive book! You write into it with all honesty about yourself and the people around you and the ways you could change or helkp certain situations! It's a book of self-control and deiscipline . I highly recommend!!</p>

                            <p className='flex items-center gap-2 justify-start text-black pt-3'> <GiSelfLove className='text-[red] underline' /> You and 2 others</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2 text-[red]'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Mac Dusa</p>
                                    <small className='flex items-center gap-1'>25 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p className='text-justify'>Without trust in a relationship, is there even a relationship ..?!</p>

                            <p className='flex items-center gap-2 justify-start text-black pt-3'> <GiSelfLove className='text-[red] underline' /> 3</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2 text-[red]'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>




                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Flo Pharoah</p>
                                    <small className='flex items-center gap-1'>26 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p className='text-justify'>I nevwer seeked validation so your opinion of my opinion is something you really could've kept to yourself!!!</p>

                            <p className='flex items-center gap-2 justify-start text-black pt-3'> <BiLike className='text-[blue] underline' /> 2</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>



                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Flo Pharoah</p>
                                    <small className='flex items-center gap-1'>26 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p className='text-justify flex items-center'>The fact that we are letting love die sickens me !! <BsEmojiSunglasses /></p>

                            <p className='flex items-center gap-2 justify-start text-black pt-3'> <BiLike className='text-[blue] underline' /><GiSelfLove className='text-[red] underline' /> 3</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Sadek Hossain</p>
                                    <small className='flex items-center gap-1'>27 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <div className="bg-gradient-to-r from-red-700 to-blue-800 w-[350px] md:w-[520px] h-[350px] md:h-[500px] static z-0 rounded-md"><p className='absolute top-56 left-16 z-10 text-xl md:text-3xl font-bold text-white text-center pr-7'>Click your home icon to rerfresh feed !</p></div>


                            <div className='flex justify-between'>
                                <p className='flex items-center gap-2 justify-start text-black'> <GiSelfLove className='text-[red]' /> You and 5 others</p>
                                <p className='flex items-center gap-2 justify-end text-black'>1 comment</p>
                            </div>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2 text-[red]'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Kamran Ahmed</p>
                                    <small className='flex items-center gap-1'>27 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p className='text-justify flex items-center'>jhe <BsEmojiSunglasses /></p>

                            <p className='flex items-center gap-2 justify-start text-black pt-3'> <BiLike className='text-[blue] underline' /><GiSelfLove className='text-[red] underline' /> 3</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Flo Pharoah</p>
                                    <small className='flex items-center gap-1'>28 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p className='text-justify flex items-center'>Grandrising & Remember, it is not a 'mistake' for someone to treat you in a way they wouldn't want to be treated! If they cared about you enough those actions would have never enev crossed their minds !! <BsEmojiSunglasses /></p>

                            <p className='flex items-center gap-2 justify-start text-black pt-3'> <BiLike className='text-[blue] underline' /><GiSelfLove className='text-[red] underline' /> 6</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="card w-[400px] md:w-[570px] bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <div className='flex items-center gap-2'>
                                <div class="avatar">
                                    <div class="w-14 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold flex gap-2'>Salman Ahmed</p>
                                    <small className='flex items-center gap-1'>29 days ago <RiEarthFill /></small>
                                </div>
                                <ul class="menu menu-horizontal p-0 z-5">
                                    <li tabindex="0">
                                        <a className='absolute bottom-0 left-72'>
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2 bg-white w-56 shadow-xl rounded-lg font-bold z-10">
                                            <li><a>Save Post</a></li>
                                            <li><a>Report Post</a></li>
                                            <li><a>Edit Post</a></li>
                                            <li><a>Delete Post</a></li>
                                            <div class="divider"></div>
                                            <li><a>Open post in new tab</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                            <p className='text-justify flex items-center'>hello <BsEmojiSunglasses /></p>

                            <p className='flex items-center gap-2 justify-start text-black pt-3'> <BiLike className='text-[blue] underline' /><GiSelfLove className='text-[red] underline' /> 2</p>

                            <div className='flex items-center gap-1 justify-around font-bold bg-slate-100 p-2 rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <GiSelfLove /> Love
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiComment /> Comment
                                </div>
                                <div className='flex items-center gap-2'>
                                    <BiShare /> Share
                                </div>
                            </div>

                            <div className='flex justify-between items-center gap-2'>
                                <div class="avatar pr-3">
                                    <div class="w-10 rounded-full">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAxftHW7ex0ZIqqlCZ2rBDZPYJICgOBBvlw&usqp=CAU" />
                                    </div>
                                </div>
                                <BsFillEmojiSmileFill />
                                <BiLink />
                                <MdGif />
                                <div class="form-control w-3/4 h-8">
                                    <input type="text" placeholder="Write a comment..." className='input input-bordered rounded-full bg-slate-100' />
                                </div>
                            </div>

                        </div>
                    </div>




                    <div class="card w-[400px] md:w-[570px] bg-white shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <h2 class="font-bold text-4xl text-center  ">There are No Posts Found! </h2>
                            <h2 class="font-bold text-lg text-center  ">Keep checking back later or refresh to get more feeds!!</h2>




                        </div>
                    </div>
                </div>


                {/* Right Sidebar */}
                <div className='hidden lg:block'>
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
                                <small>
                                    Sadek Hussain
                                </small>

                            </div>
                            <div className='flex'>
                                <button class="ml-1 btn bg-white text-black normal-case ">Ignore</button>
                                <button class="ml-1 btn normal-case bg-red-600 text-white">Follow</button>
                            </div>


                        </div>
                    </div>
                    <div class="card w-64 bg-base-100 shadow-xl rounded-md mb-2">
                        <div class="card-body">
                            <h2 class="font-bold text-lg ">Your Friends</h2>
                            <input type="text" placeholder="Search here" class="input input-bordered input-sm w-full max-w-xs rounded-full" />
                            <div className='flex items-center gap-1 py-2'>
                                <div class="avatar mr-2">
                                    <div class="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <small>
                                    Admin
                                </small>

                            </div>
                            <div className='flex items-center gap-1 py-2'>
                                <div class="avatar mr-2">
                                    <div class="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <small>
                                    Kazi Musharrof Shishir
                                </small>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Home;