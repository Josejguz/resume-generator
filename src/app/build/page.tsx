import Navbar from "@/components/Navbar";
import { PlusIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useState } from "react";
import NewResume from "./create-resume/NewResume";
import BuildResume from "./components/BuildResume";

export default function Home() {

    //const [buildResumeStatus, setBuildResumeStatus] = useState(false);

    const handleNewResume = () => {
        console.log("New Resume");
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col mx-10 my-8">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold">Build Your Resume</h1>
                </div>
                <br/>

                <div>
                    {/*<button className="bg-red-500 hover:bg-red-700 py-3 px-4 text-white rounded-3xl"><span>New Resume <PlusIcon className="h-6"/></span></button> */}
                    <BuildResume />
                </div>
                <br />

                <div>
                    <h1>My Resumes</h1>
                    <p className="text-xs text-gray-500 py-2">No Resumes Created</p>
                </div>
            </div>

        </div>
    )
}