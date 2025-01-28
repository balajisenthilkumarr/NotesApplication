import React from 'react';
import logo from "../assests/logo.webp"
import { Link } from 'react-router-dom';
import Profile from "../profile.webp"
const Enterypage = () => {
    return (
        <div className="bg-teal-500 w-full h-screen flex flex-col items-center justify-center">
            <img src={Profile} alt="Logo" className="h-50 rounded-full" />
            <div className="flex items-center mt-2">
                <h1 className="italic text-2xl">Easy to note anything</h1>
            </div>
            <Link to="/home">
            <button className="ml- px-4 py-2 bg-white text-black-200 rounded-full shadow-md hover:bg-teal-100 flex items-center mt-5">
                Let's Start
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
            </Link>
        </div>
    );
};

export default Enterypage;