
import React from 'react';

function Contact() {
      <style>

      </style>
      return (
            <div>
                  <div className="flex items-center justify-center w-full h-screen">
                        <div id='one' className="max-w-[1100px] w-[100%] sm:w-full h-[550px] bg-content flex flex-col sm:flex-row items-center border border-stone-900 rounded-3xl m-5">


                              {/* Contact Me text */}
                              <div className="text-5xl sm:text-5xl md:text-6xl text-zinc-50 w-full px-5 sm:px-10 pt-10 py-2 text-center flex justify-start items-center md:overline sm:order-1">
                                    <span className="text-slate-50 font-thin">Contact Me</span>
                              </div>

                              {/* Icon list */}
                              <ul className="flex flex-col  sm:flex-col sm:flex-wrap w-full px-5 pt-5 sm:order-2 gap-4">
                                    {/* First icon */}
                                    <a href='https://github.com/huzfm/' target='_blank'>

                                          <li className="flex items-center  mb-4 sm:mb-0 sm:mr-4 border border-none rounded-xl bg-contact  hover:translate-x-[-40px] transition-ease-in duration-500 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 64 64">
                                                      <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                                                </svg>
                                                <a className="ml-4 text-3xl text-white font-navbar">Github</a>
                                          </li>
                                    </a>

                                    {/* Second icon */}
                                    <a href='https://www.linkedin.com/in/huzfm/' target='_blank'>
                                          <li className="flex items-center mb-4 sm:mb-0 sm:mr-4 border border-none rounded-xl bg-contact hover:translate-x-[-40px] transition-ease-in duration-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
                                                      <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
                                                      <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
                                                      <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
                                                      <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                                                </svg>
                                                <a className="ml-4 text-2xl text-white font-navbar">LinkedIn</a>
                                          </li>
                                    </a>

                                    {/* Third icon */}
                                    <a href='https://www.x.com/huzfm/' target='_blank'>
                                          <li className="flex items-center mb-4 sm:mb-0 sm:mr-4 border border-none rounded-xl bg-contact hover:translate-x-[-40px] transition-ease-in duration-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 50 50">
                                                      <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                                                </svg>
                                                <a className="ml-4 text-3xl text-white font-navbar">X</a>
                                          </li>
                                    </a>

                                    {/* Fourth icon */}
                                    <a href='https://www.instagram.com/huzfm/' target='_blank'>
                                          <li className="flex items-center mb-4 sm:mb-0 sm:mr-4 border border-none rounded-xl bg-contact hover:translate-x-[-40px] transition-all duration-400 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
                                                      <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#fd5"></stop>
                                                            <stop offset=".328" stop-color="#ff543f"></stop>
                                                            <stop offset=".348" stop-color="#fc5245"></stop>
                                                            <stop offset=".504" stop-color="#e64771"></stop>
                                                            <stop offset=".643" stop-color="#d53e91"></stop>
                                                            <stop offset=".761" stop-color="#cc39a4"></stop>
                                                            <stop offset=".841" stop-color="#c837ab"></stop>
                                                      </radialGradient>
                                                      <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                                      <radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#4168c9"></stop>
                                                            <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
                                                      </radialGradient>
                                                      <path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                                      <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                                                      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                                                      <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                                </svg>
                                                <a className="ml-4 text-3xl text-white font-navbar">Instagram</a>
                                          </li>
                                    </a>
                              </ul>
                        </div>
                  </div>
            </div>
      );
}

export default Contact;
