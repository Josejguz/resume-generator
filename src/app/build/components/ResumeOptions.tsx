'use client'

import { PlusIcon, PencilSquareIcon, XCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';


export default function ResumeOptions({showDialog, handleDialog, createResume}: {showDialog: boolean, handleDialog: () => void, createResume: () => void}) {

    return (
        <div className='flex justify-center'>

            {/*============== Create Resume Dialog Form ============== */}
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

            {/*============== Create or Modify Resume Buttons ============== */} 
            <button className="flex flex-col py-3 px-4 rounded-3xl border-4 h-72 w-72 m-4 text-home border-home hover:bg-home hover:text-white" onClick={handleDialog}>
                <div className='flex flex-col justify-center'>
                    <h1 className="font-semibold text-2xl">Create A New Resume </h1>
                    <PlusIcon className="h-12 m-9"/>
                </div>
                <br/>
            </button>
            <button className="flex flex-col py-3 px-4 rounded-3xl border-4 h-72 w-72 m-4 text-home border-home hover:bg-home hover:text-white">
                <div className='flex flex-col justify-center'>
                    <h1 className="font-semibold text-2xl">Modify An Existing Resume </h1>
                    <PencilSquareIcon className="h-12 m-9"/>
                </div>
                <br/>
            </button>
        </div>
    )
}