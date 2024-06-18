import React from 'react';
import Navbar from "@/components/Navbar";
import NewResume from './NewResume';

export default function Home() {
    return (
        <div>
            <Navbar />
            <NewResume />
        </div>
    );
}