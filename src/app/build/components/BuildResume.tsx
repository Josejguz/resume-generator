import React from 'react';
import FeatureBar from './FeatureBar';


export default function BuildResume() { 
    return (
        <div className="border-red-500 border-2 rounded-lg text-white">
            <h1 className=" font-bold border-b-white bg-red-500 text-2xl">Build Resume</h1>
            <div className="flex flex-rows">
                <div className="w-2/5">
                    <h1>Placeholder</h1>
                </div>

                <div className="bg-red-500 w-3/5 p-2">
                    <FeatureBar />
                </div>

                <br/>
                
            </div>
        </div>
    )
}