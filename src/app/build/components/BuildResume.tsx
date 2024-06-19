'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { PlusIcon, PencilSquareIcon, XCircleIcon} from '@heroicons/react/20/solid'


export default function BuildResume() {

    const [display, setDisplay] = useState("default");
    const [showDialog, setShowDialog] = useState(false);
    const [resumeName, setResumeName] = useState("");

    const handleDialog = () => {
        if(showDialog) {
            setShowDialog(false);
            (document.getElementById("dialog") as HTMLDialogElement)?.close();
        } else {
            setShowDialog(true);
            (document.getElementById("dialog") as HTMLDialogElement)?.showModal();
        }
    }

    useEffect(() => {
        const onEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && showDialog) {
                setShowDialog(false);
                (document.getElementById("dialog") as HTMLDialogElement)?.close();
            }
        }

        document.addEventListener("keydown", onEscape);

        return () => {
            document.removeEventListener("keydown", onEscape);
        }
    }, [showDialog]);

    const createResume = () => {
        setShowDialog(false);
        window.location.href = "/build/create-resume/";
        (document.getElementById("dialog") as HTMLDialogElement)?.close();
    }

    const renderDisplay = () => {
       switch(display) {
           case "NewResume":
               window.location.href = "/build/create-resume/";
                break;

           case "default":
               return (
                   <div className='flex justify-center'>
                        <dialog open={showDialog} className='h-80 w-1/2 rounded-3xl border-4 border-home-hover' id="dialog" >
                            
                                <div className='bg-home text-white p-4 flex justify-between'>
                                    <h1 className='text-xl'>Create a New Resume</h1>
                                    <XCircleIcon className='h-8 hover:cursor-pointer hover:text-red-500' onClick={handleDialog}/>
                                </div>
                                <div className='m-4'>
                                    <label className='text-lg'>Resume Name</label>
                                    <input type='text' className='border-2 border-home w-full rounded-2xl p-2' placeholder='Resume Title' />
                                    
                                    <br/>

                                    <label className='text-lg'>Template</label>
                                    <select className='border-2 border-home w-full rounded-2xl p-2'>
                                        <option>Template 1</option>
                                        <option>Template 2</option>
                                        <option>Template 3</option>
                                    </select>
                                    <br/>
                                    <button className='bg-home hover:bg-home-hover flex flex-row justify-center text-white p-2 rounded-2xl w-full mt-4' onClick={createResume}>Create Resume <PlusIcon className=' ml-1 h-6'/></button>
                                </div>

                        </dialog> 
                       <button className="flex flex-col align-middle py-3 px-4 rounded-3xl border-4 h-72 w-72 m-4 border-home hover:bg-home hover:text-white" onClick={/*()=>setDisplay("NewResume")*/ handleDialog}>
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

    return (
    <div>
        {renderDisplay()}
    </div>
    );
}