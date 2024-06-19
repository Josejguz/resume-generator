import React from 'react';
import Navbar from "@/components/Navbar";
import NewResume from './NewResume';

export default function Home() {
    return (
        <div>
            <Navbar />
            <br/>
            <div className='flex flex-col'>
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold">Build Your Resume</h1>
                </div>
                <div className='justify-center mx-10 my-8'>
                    <NewResume />
                </div>
            </div>
        </div>
    );
}