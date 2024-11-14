import React from 'react'
import { useState } from 'react';
export default function Contact() {

  const [name , setName] = useState('')
  const [Age , setAge] = useState('')
  const [Email , setEmail] = useState('')
  const [Password , setPassword] = useState('')

const handleNameChange = (e) => {
  setName(e.target.value)
};
const handleAgeChange = (e) => {
  setAge(e.target.value)
};
const handleEmailChange = (e) => {
  setEmail(e.target.value)
};
const handlePasswordChange = (e) => {
  setPassword(e.target.value)
};


    
  return (
    <div className="py-12 h-screen">
      <div className="contact">
        <h1 className="uppercase text-3xl font-bold text-center mx-auto w-fit">
          conatct section
        </h1>
        <div>
          <div className="flex items-center justify-center gap-4">
            <div className="line main-color"></div>
            <i className="fa-solid fa-star main-color"></i>
            <div className="line main-color"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-4/12">
        <div className="grid grid-cols-1">
          <div className=" my-2 relative">
            <div
              className={`absolute  left-4 transition-all duration-300 ${
                name
                  ? "-top-3 visible opacity-100"
                  : "-top-1 invisible opacity-0"
              }`}
            >
              <p>UserName:</p>
            </div>
            <input
              type="text"
              placeholder="UserName"
              value={name}
              onChange={handleNameChange}
              className="w-full p-4 border-b outline-none "
            />
          </div>
          <div className=" my-2 relative">
            <div
              className={`absolute  left-4 transition-all duration-300 ${
                Age
                  ? "-top-3 visible opacity-100"
                  : "-top-1 invisible opacity-0"
              }`}
            >
              <p>UserAge:</p>
            </div>
            <input
              type="text"
              value={Age}
              onChange={handleAgeChange}
              placeholder="UserAge"
              className="w-full p-4 border-b outline-none"
            />
          </div>
          <div className=" my-2 relative">
            <div
              className={`absolute  left-4 transition-all duration-300 ${
                Email
                  ? "-top-3 visible opacity-100"
                  : "-top-1 invisible opacity-0"
              }`}
            >
              <p>UserEmail:</p>
            </div>
            <input
              type="text"
              value={Email}
              onChange={handleEmailChange}
              placeholder="UserEmail"
              className="w-full p-4 border-b outline-none"
            />
          </div>
          <div className=" my-2 relative">
            <div
              className={`absolute  left-4 transition-all duration-300 ${
                Password
                  ? "-top-3 visible opacity-100"
                  : "-top-1 invisible opacity-0"
              }`}
            >
              <p>UserPassword:</p>
            </div>
            <input
              type="text"
              placeholder="UserPassword"
              value={Password}
              onChange={handlePasswordChange}
              className="w-full p-4 border-b outline-none"
            />
          </div>
          <div className="my-2 w-full text-start">
            <button className="bg-green-500 p-3 rounded-xl text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
