import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';  // Importing Swiper styles
import './Project.css';
import estate from '../assets/estate.png';  // Example image
import Swipe from './Swipe';

function Project() {
      return (
            <div className="px-4 sm:px-0">
                  {/* Title */}
                  <p className="text-3xl sm:text-4xl text-white flex items-center justify-center pb-8 sm:pb-10">
                        My Projects
                  </p>

                  {/* Wrapping div for Swiper */}
                  <div className="max-w-[1100px] w-full mx-auto">
                        <Swiper
                              // Remove navigation property to disable arrows
                              className="mySwiper"
                        >
                              {/* First Project */}
                              <SwiperSlide>
                                    <div className="max-w-[1100px] w-full sm:w-full h-auto sm:h-[450px] pb-5 bg-content flex flex-col sm:flex-row items-center justify-center border border-stone-900 rounded-3xl m-5">
                                          <div className="flex justify-center items-center w-full h-[300px] sm:h-[500px] sm:w-2/3 p-5">
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
                                                      <button className="bg-orange-700 text-black p-2 rounded-xl px-4 sm:px-5 font-semibold hover:bg-orange-500">HTML</button>
                                                      <button className="bg-blue-500 text-black p-2 rounded-xl px-4 sm:px-5 font-semibold hover:bg-blue-400">CSS</button>
                                                      <button className="bg-yellow-500 text-black p-2 rounded-xl px-4 sm:px-5 font-semibold hover:bg-yellow-400">JS</button>
                                                      <button className="bg-amber-500 text-black p-2 rounded-xl px-4 sm:px-5 font-semibold hover:bg-amber-400">Firebase</button>
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

                              {/* Second Project */}
                              <SwiperSlide>
                                    <div className="max-w-[1100px] w-full sm:w-full h-auto sm:h-[450px] pb-5 bg-content flex flex-col sm:flex-row items-center justify-center border border-stone-900 rounded-3xl m-5">
                                          <div className="flex justify-center items-center w-full h-[300px] sm:h-[500px] sm:w-2/3 p-5">
                                                <img
                                                      src={estate}
                                                      alt="Second Project Preview"
                                                      className="max-w-full max-h-full object-contain rounded-lg"
                                                />
                                          </div>
                                          <div className="text-zinc-50 w-full text-center flex flex-col items-center sm:order-1 px-4 sm:px-0">
                                                <p className="text-base sm:text-2xl pb-8 sm:pb-10 text-justify px-4 sm:px-10">
                                                      This is the second project description. Replace this with the actual details of your second project.
                                                </p>
                                                <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
                                                      <button className="bg-orange-700 text-black p-2 rounded-xl px-4 sm:px-5 font-semibold hover:bg-orange-500">HTML</button>
                                                      <button className="bg-blue-500 text-black p-2 rounded-xl px-4 sm:px-5 font-semibold hover:bg-blue-400">CSS</button>
                                                      <button className="bg-yellow-500 text-black p-2 rounded-xl px-4 sm:px-5 font-semibold hover:bg-yellow-400">JS</button>
                                                      <button className="bg-amber-500 text-black p-2 rounded-xl px-4 sm:px-5 font-semibold hover:bg-amber-400">Firebase</button>
                                                </div>
                                                <div className="pt-10 flex gap-10">
                                                      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                                            <button className="bg-black text-white p-2 rounded-xl px-4 sm:px-5 font-bold hover:bg-slate-200 hover:text-black">See Live</button>
                                                      </a>
                                                      <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
                                                            <button className="bg-black text-white p-2 rounded-xl px-4 sm:px-5 font-bold hover:bg-slate-200 hover:text-black">Github</button>
                                                      </a>


                                                </div>
                                                <div>
                                                      <Swipe />
                                                </div>
                                          </div>
                                    </div>

                                    {/* Swipe Component positioned at the bottom */}

                              </SwiperSlide>
                        </Swiper>
                  </div>
            </div>
      );
}

export default Project;
