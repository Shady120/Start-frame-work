import React from 'react'

export default function About() {
  return (
    <>
      <div className="bg-gray-600 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/5 ">
          <div>
            <h1 className="uppercase text-4xl font-extrabold text-center  mx-auto w-fit">
              about component
            </h1>
            <div>
              <div className='flex items-center justify-center gap-4'>
                <div className="line text-white"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line text-white"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 py-6 ">
            <div className="col-span-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-span-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
