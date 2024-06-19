import Navbar from "@/components/Navbar";
import React from "react";
import BuildResume from "./components/BuildResume";

export default function Home() {

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