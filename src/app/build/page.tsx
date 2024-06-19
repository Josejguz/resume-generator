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