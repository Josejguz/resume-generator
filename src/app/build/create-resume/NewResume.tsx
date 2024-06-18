'use client'

import React from 'react';
import FeatureBar from '../components/FeatureBar';
import { InformationCircleIcon } from '@heroicons/react/16/solid';
import InformationTab from '../components/InformationTab';
import { useState } from 'react';

export default function NewResume() { 

    const [activeTab, setActiveTab] = useState("InformationTab");

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    }

    const renderTab = () => {
        switch(activeTab) {
            case "InformationTab":
                return <InformationTab />
            case "StylingTab":
                return <h1>Styling Tab</h1>
            case "FormatTab":
                return <h1>Format Tab</h1>
            default:
                return <InformationTab />
        }
    }

    return (
        <div className="border-home border-2 rounded-lg w-9/10 ">
            <div className='flex flex-row w-auto bg-home justify-between items-center'>
                <h1 className="font-bold text-2xl text-white ml-5">Build Resume</h1>
                <FeatureBar handleTabChange={handleTabChange} />
            </div>
            <div className="flex flex-rows">
                <div className="w-2/5">
                    <h1>Placeholder</h1>
                </div>
                {renderTab()}
                <br/>
                
            </div>

            <div className="flex p-3 justify-end bg-home">
                <a href="/tips" className="flex flex-row justify-end text-white hover:text-gray-300 ">Need Help?< InformationCircleIcon className="h-5 w-5"/></a>
            </div>
        </div>
    )
}