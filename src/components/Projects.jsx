import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './Project.css';
import estate from '../assets/estate.png';
import Swipe from './Swipe';
import travel from '../assets/travel.png'


function Project() {
      return (
            <div className="px-4 sm:px-0">
                  {/* <p className='text-white text-center'>dsjhdishuidh</p> */}
                  <div className="text-5xl sm:text-5xl md:text-6xl text-zinc-50 w-full px-5 sm:px-10 pt-10 py-2 text-center">
                        <span className="text-white font-mono text-2xl sm:text-2xl lg:text-6xl">My Projects</span>
                  </div>

                  <div className="max-w-[1100px] w-full mx-auto">


                        <Swiper
                              className="mySwiper"
                        >

                              <SwiperSlide>
                                    <div className="max-w-[1100px] w-full sm:w-full h-auto sm:h-[550px] pb-5 bg-content flex flex-col sm:flex-row items-center justify-center border border-stone-900 rounded-3xl m-5">

                                          <div className="  h-[300px] sm:h-[500px] sm:w-2/3 p-5">
                                                <h1 className='text-white relative top-[30px] lg:top-[100px] text-3xl'>Skill Connect</h1>
                                                <img
                                                      src={travel}
                                                      alt="Second Project Preview"
                                                      className="max-w-full max-h-full object-contain rounded-lg"
                                                />
                                          </div>
                                          <div className="text-zinc-50 w-full text-center flex flex-col items-center sm:order-1 px-4 sm:px-0">
                                                <p className="text-base sm:text-2xl pb-8 sm:pb-10 text-justify px-4 sm:px-10 pt-10">
                                                      Skill connect is a dynamic web platform designed to connect service providers and clients, SkillConnect streamlines the process of finding and offering services. The app focuses on providing a seamless and user-friendly experience.
                                                </p>
                                                <div className="flex flex-wrap justify-center gap-4 sm:gap-10 ">
                                                      <button className="bg-black text-white p-2 rounded-xl px-4 sm:px-5 font-mono hover:bg-stone-950">
                                                            Next Js
                                                      </button>
                                                      <button className="bg-blue-600 text-black p-2 rounded-xl px-4 sm:px-5 font-mono hover:bg-blue-500">Tailwind CSS</button>
                                                      <button className="bg-green-500 text-black p-2 rounded-xl px-4 sm:px-5 font-mono hover:bg-green-400">Node Js</button>
                                                      <button className="bg-yellow-500 text-black p-2 rounded-xl px-4 sm:px-5 font-mono hover:bg-yellow-400">Express JS</button>
                                                      <button className="bg-emerald-700 text-black p-2 rounded-xl px-4 sm:px-5 font-mono hover:bg-emerald-600">MongoDB</button>
                                                </div>
                                                <div className="pt-10 flex gap-10">
                                                      <a href="https://skillconnectnext.vercel.app" target="_blank" rel="noopener noreferrer">
                                                            <button className="bg-black text-white p-2 rounded-xl px-4 sm:px-5 font-bold hover:bg-slate-200 hover:text-black">See Live</button>
                                                      </a>
                                                      <a href="https://github.com/huzfm/skill-connect" target="_blank" rel="noopener noreferrer">
                                                            <button className="bg-black text-white p-2 rounded-xl px-4 sm:px-5 font-bold hover:bg-slate-200 hover:text-black">Github</button>
                                                      </a>


                                                </div>
                                                <div>
                                                      <Swipe />
                                                </div>
                                          </div>
                                    </div>


                              </SwiperSlide>
                              <SwiperSlide>
                                    <div className="max-w-[1100px] w-full sm:w-full h-auto sm:h-[550px] pb-5 bg-content flex flex-col sm:flex-row items-center justify-center border border-stone-900 rounded-3xl m-5">

                                          <div className="  h-[300px] sm:h-[500px] sm:w-2/3 p-5">
                                                <h1 className='text-white relative top-[30px] lg:top-[100px] text-3xl'>Travel Itneary</h1>
                                                <img
                                                      src={travel}
                                                      alt="Second Project Preview"
                                                      className="max-w-full max-h-full object-contain rounded-lg"
                                                />
                                          </div>
                                          <div className="text-zinc-50 w-full text-center flex flex-col items-center sm:order-1 px-4 sm:px-0">
                                                <p className="text-base sm:text-2xl pb-8 sm:pb-10 text-justify px-4 sm:px-10 pt-10">
                                                      This React app is an intuitive, user-friendly web platform showcases the famous picnic spots of Kashmir. Built with React, this website offers a seamless experience for users interested in discovering new destinations, and organizing their journeys
                                                </p>
                                                <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
                                                      <button className="font-mono bg-blue-500 text-black p-2 rounded-xl px-4 sm:px-5  hover:bg-blue-600">
                                                            React
                                                      </button>
                                                      <button className="font-mono bg-blue-600 text-black p-2 rounded-xl px-4 sm:px-5  hover:bg-blue-700">Tailwind CSS</button>
                                                      <button className="font-mono bg-stone-900 text-white p-2 rounded-xl px-4 sm:px-5  hover:bg-stone-950">web3forms</button>
                                                      <button className="font-mono bg-slate-400 text-black p-2 rounded-xl px-4 sm:px-5  hover:bg-slate-500">Swiper.js</button>
                                                </div>
                                                <div className="pt-10 flex gap-10">
                                                      <a href="https://travel-journey-react.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                            <button className="bg-black text-white p-2 rounded-xl px-4 sm:px-5 font-bold hover:bg-slate-200 hover:text-black">See Live</button>
                                                      </a>
                                                      <a href="https://github.com/huzfm/Travel-journey" target="_blank" rel="noopener noreferrer">
                                                            <button className="bg-black text-white p-2 rounded-xl px-4 sm:px-5 font-bold hover:bg-slate-200 hover:text-black">Github</button>
                                                      </a>


                                                </div>
                                                <div>
                                                      <Swipe />
                                                </div>
                                          </div>
                                    </div>


                              </SwiperSlide>


                              <SwiperSlide>
                                    <div className="max-w-[1100px] w-full sm:w-full h-auto sm:h-[450px] pb-5 bg-content flex flex-col sm:flex-row items-center justify-center border border-stone-900 rounded-3xl m-5">
                                          <div className="w-full h-[300px] sm:h-[500px] sm:w-2/3 p-5">
                                                <h1 className='text-white relative top-[30px] lg:top-[100px] text-3xl'>The Estate</h1>

                                                <img
                                                      src={estate}
                                                      alt="Project Preview"
                                                      className="max-w-full max-h-full object-contain rounded-lg"
                                                />
                                          </div>
                                          <div className="text-zinc-50 w-full text-center flex flex-col items-center sm:order-1 px-4 sm:px-0">
                                                <p className="text-base sm:text-2xl pb-8 sm:pb-10 text-justify px-4 sm:px-10">
                                                      This is a real estate management system that lets users manage properties.
                                                      Built with vanilla JavaScript for core functionality and Firebase for secure login,
                                                      storage, and real-time database.
                                                </p>
                                                <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
                                                      <button className="bg-orange-700 text-black p-2 rounded-xl px-4 sm:px-5 font-mono hover:bg-orange-500">HTML</button>
                                                      <button className="bg-blue-500 text-black p-2 rounded-xl px-4 sm:px-5 font-mono hover:bg-blue-400">CSS</button>
                                                      <button className="bg-yellow-500 text-black p-2 rounded-xl px-4 sm:px-5 font-mono hover:bg-yellow-400">JS</button>
                                                      <button className="bg-amber-500 text-black p-2 rounded-xl px-4 sm:px-5 font-mono hover:bg-amber-400">Firebase</button>
                                                </div>
                                                <div className="pt-10 flex gap-10">
                                                      <a href="https://thestate.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                            <button className="bg-black text-white p-2 rounded-xl px-4 sm:px-5 font-bold hover:bg-slate-200 hover:text-black">See Live</button>
                                                      </a>
                                                      <a href="https://github.com/huzfm/The_estate" target="_blank" rel="noopener noreferrer">
                                                            <button className="bg-black text-white p-2 rounded-xl px-4 sm:px-5 font-bold hover:bg-slate-200 hover:text-black">Github</button>
                                                      </a>
                                                </div>
                                                <div>
                                                      <Swipe />
                                                </div>
                                          </div>
                                    </div>
                              </SwiperSlide>


                        </Swiper>
                  </div>
            </div >
      );
}

export default Project;
