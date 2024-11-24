import Scroll from './Scroll';
import profile from '../assets/bg.webp'
export default function Home() {

      return (
            <>
                  {/* Circular Button with Expand Effect */}
                  <div className="pt-5 px-5 py-0">
                        <a href="/">
                              <button className="group flex items-center justify-center w-12 h-12 bg-neutral-800  text-white font-bold rounded-full hover:w-48 transition-all duration-300 ease-in-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300">
                                    <span className="transition-all duration-300 ease-in-out whitespace-nowrap">
                                          <span className="block group-hover:hidden">HM</span>
                                          <span className="hidden group-hover:inline ml-2">Huzaif Mushtaq</span>
                                    </span>
                              </button>
                        </a>
                  </div>

                  <a href="mailto:huzaaifmushtaq@gmail.com">
                        <button className="absolute top-5 right-4 bg-neutral-800 text-white p-3 rounded-full shadow-lg hover: focus:outline-none flex items-center justify-center hover:bg-white">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-7 h-7 text-white">
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" className="list-none" />
                              </svg>
                        </button>
                  </a>



                  {/* Main Content */}
                  <div className="w-full h-screen flex flex-col items-center justify-center relative p-4">
                        {/* Background Circle with Image */}
                        <div
                              className="absolute w-[300px] h-80  bg-cover bg-center bg-opacity-30 z-0 top-[-1%]"
                              style={{
                                    backgroundImage: `url(${profile})`,
                              }}
                        ></div>




                        <div className="relative z-10 ">
                              <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-stone -900 text-5xl sm:text-5xl md:text-6xl lg:text-8xl sm:font-semibold">
                                    Huzaif Mushtaq
                              </h1>
                        </div>
                        <Scroll />

                  </div>

                  {/* Custom Animation for Scroll */}
                  <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(1.5rem);
          }
          100% {
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .scroll-down {
            bottom: 4rem;
          }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
            </>
      );
}