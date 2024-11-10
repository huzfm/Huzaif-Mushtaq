
import React from 'react';

export default function Scroll() {
      return (
            <>
                  <div className="absolute scroll-down bottom-0 transform translate-y-[-20vh] md:translate-y-[50vh] lg:translate-y-[-20vh] flex flex-col items-center">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start overflow-hidden">
                              <div className="w-1 h-1 bg-white mt-1 animate-scroll"></div>
                        </div>
                        <p className="text-white mt-1 text-sm">Scroll Down</p>
                  </div>
            </>
      );
}
