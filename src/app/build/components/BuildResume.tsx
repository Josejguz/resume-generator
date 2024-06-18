'use client'
import React from 'react';
import { useState } from 'react';
import { PlusIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import NewResume from '../create-resume/NewResume';

export default function BuildResume() {

    const [display, setDisplay] = useState("default");

    const renderDisplay = () => {
       switch(display) {
           case "NewResume":
               window.location.href = "/build/create-resume/";
                break;
                
           case "default":
               return (
                   <div className='flex justify-center'>
                       <button className="flex flex-col align-middle py-3 px-4 rounded-3xl border-4 h-72 w-72 m-4 border-home hover:bg-home hover:text-white" onClick={()=>setDisplay("NewResume")}>
                           <h1 className="font-semibold">Create A New Resume </h1>
                           <PlusIcon className="h-6"/>
                           <p className='text-gray-500'>Create your own resume.</p>
                       </button>
                       <button className=" flex py-3 px-4 text-home rounded-3xl border-4 h-72 w-72 m-4 border-home">
                           <h1>Modify An Existing Resume</h1>
                           <PencilSquareIcon className="h-6"/>
                       </button>
                   </div>
               )
           }
       }
   
       const displaySelected = (display: string) => {
           setDisplay(display);
       }

    return (
    <div>
        {renderDisplay()}
    </div>
    );
}