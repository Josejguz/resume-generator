'use client'

import React from "react";
import { useState } from "react";
import InformationTab from "./InformationTab";
export default function FeatureBar({handleTabChange}: {handleTabChange: any}) {

    const updateActiveTab = (tab: string) => {
        handleTabChange(tab);
    }

    return (
        <div className="text-white text-xl font-extrabold ">
            <nav>
                <ul className="flex">
                    <li>
                        <button className="w-44 bg-home hover:bg-home-hover py-5 px-8" onClick={() => updateActiveTab ("InformationTab")} >Information</button>
                    </li>
                    <li>
                        <button className="w-44 bg-home hover:bg-home-hover  py-5 px-8" onClick={() => updateActiveTab("StylingTab")}>Styling    </button>
                    </li>
                    <li>
                        <button className="w-44 bg-home hover:bg-home-hover py-5 px-8" onClick={() => updateActiveTab("FormatTab")}>Format     </button>
                    </li>
                </ul>
                <br/>   
            </nav>
        </div>
    )
}