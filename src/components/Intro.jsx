
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
      useEffect(() => {
            AOS.init({
                  duration: 400,
                  offset: 200, // Adjust if needed
            });
      }, []);

      return (
            <div className="flex items-center justify-center w-full  p-4">
                  <div className="max-w-[1100px] w-full h-auto bg-content flex flex-col lg:flex-row border border-stone-900 rounded-3xl">
                        <div
                              className="text-5xl text-zinc-50 w-full lg:w-[600px] px-6 lg:px-10 pt-10 lg:pt-20 py-2 pb-20"
                              data-aos="fade-up" // AOS animation for the first text
                        >
                              Hey I&apos;m Huzaif Mushtaq
                              <br />
                              Full Stack web developer.
                        </div>
                        <div
                              className="text-3xl text-zinc-50 w-full lg:w-[500px] px-6 py-2 m-4 lg:m-10 pt-5 lg:pt-10"
                              data-aos="fade-up" // AOS animation for the second text
                        // data-aos-delay="200" // Delay for the second element
                        >
                              A Computer Science student passionate about web technologies
                              and a tech enthusiast.
                        </div>
                  </div>
            </div>
      );
};

export default Intro;
