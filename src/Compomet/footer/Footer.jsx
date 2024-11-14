import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="firstFooter  w-full sticky text-white">
        <div className="container mx-auto py-20 text-2xl">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4 text-center ">
              <h3>LOCATION</h3>
              <p className="text-lg">2215 John Daniel Drive</p>
              <p className="text-lg">Clark, MO 65243</p>
            </div>
            <div className="col-span-4 text-center">
              <h3>AROUND THE WEB</h3>
              <div className="icons flex justify-center  gap-3 mt-3">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
            <div className="col-span-4 text-center">
              <h3>ABOUT FREELANCER</h3>
              <span className="text-lg">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </span>
            </div>
          </div>
        </div>
        <div className="footer grid grid-cols-12 py-5">
          <div className="col-span-12 text-center">
            <span>Copyright © Your Website 2021</span>
          </div>
        </div>
      </div>
    </>
  );
}
