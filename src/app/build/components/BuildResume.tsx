import React from 'react';
import FeatureBar from './FeatureBar';
import { InformationCircleIcon } from '@heroicons/react/16/solid';

export default function BuildResume() { 
    return (
        <div className="border-home border-2 rounded-lg w-9/10 ">
            <h1 className=" font-bold border-b-white bg-home text-2xl text-white p-5">Build Resume</h1>
            <div className="flex flex-rows">
                <div className="w-2/5">
                    <h1>Placeholder</h1>
                </div>

                <div className="w-3/5 p-2">
                    <FeatureBar />
                </div>

                <br/>
                
            </div>

            <div className="flex p-3 justify-end bg-home">
                <a href="/tips" className="flex flex-row justify-end text-white hover:text-gray-300 ">Need Help?< InformationCircleIcon className="h-5 w-5"/></a>
            </div>
        </div>
    )
}