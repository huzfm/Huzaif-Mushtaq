


export const Stack = () => {
      return (
            <div className="flex items-center justify-center w-full py-[100px] px-6">
                  <div className="max-w-[1100px] w-full h-[500px] bg-content flex flex-col items-center border border-stone-900 rounded-3xl">

                        {/* Title Section */}
                        <div className="text-5xl sm:text-5xl md:text-6xl text-zinc-50 w-full px-5 sm:px-10 pt-10 py-2 text-center">
                              <span className="text-white font-mono text-2xl sm:text-2xl lg:text-6xl">My Tech stack</span>
                        </div>

                        {/* Icons Section */}
                        <div className="text-2xl text-zinc-50 w-full px-10 pt-10 py-2">
                              <ul className="list-none grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-[50px]">
                                    {/* HTML Logo */}
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                                                alt="HTML"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px] h-auto"
                                          />
                                    </li>
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"
                                                alt="JavaScript"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px]  h-auto"
                                          />
                                    </li>






                                    {/* JS Logo */}
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                                                alt="JavaScript"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px]  h-auto"
                                          />
                                    </li>
                                    {/* React Logo */}
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                                                alt="React"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px]  h-auto rotating"
                                          />
                                    </li>
                                    {/* Tailwind Logo */}
                                    <li className="flex justify-center">
                                          <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" className="logo" />
                                    </li>

                                    {/* Node.js Logo */}
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                                                alt="Node.js"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px]  h-auto"
                                          />
                                    </li>


                                    {/* MongoDB Logo */}
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                                                alt="MongoDB"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px]  h-auto"
                                          />
                                    </li>



                                    {/* Next.js Logo */}
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"
                                                alt="Next.js"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px]  h-auto"
                                          />
                                    </li>

                                    {/* Firebase Logo */}
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                                                alt="Firebase"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px]  h-auto"
                                          />
                                    </li>


                                    {/* Vite Logo */}
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg"
                                                alt="Vite"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px]  h-auto  "
                                          />
                                    </li>
                                    {/* Postman Logo */}
                                    <li className="flex justify-center">
                                          <img
                                                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                                alt="Postman"
                                                className="w-12 sm:w-16 md:w-20 lg:w-[70px]  h-auto"
                                          />
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};
