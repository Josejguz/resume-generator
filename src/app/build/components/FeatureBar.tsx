'use client'

import React from "react";
import { useState } from "react";
import InformationTab from "./InformationTab";
export default function FeatureBar() {

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
        <nav>
            <div className="">
                <ul className="flex text-white p-4 text-xl font-extrabold">
                    <li>
                        <button className="w-44 bg-home hover:bg-home-hover py-5 px-8" onClick={() => handleTabChange("InformationTab")} >Information</button>
                    </li>
                    <li>
                        <button className="w-44 bg-home hover:bg-home-hover  py-5 px-8" onClick={() => handleTabChange("StylingTab")}>Styling    </button>
                    </li>
                    <li>
                        <button className="w-44 bg-home hover:bg-home-hover py-5 px-8" onClick={() => handleTabChange("FormatTab")}>Format     </button>
                    </li>
                </ul>
                <br/>
                {renderTab()} 
            </div>
        </nav>
    )
}