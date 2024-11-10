import React from 'react';
import { Triangle } from 'react-loader-spinner';

export default function Loader() {
      return (
            <div className="flex items-center justify-center min-h-screen">
                  <Triangle
                        visible={true}
                        height="80"
                        width="80"
                        color="#ffff"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                  />
            </div>
      );
}
