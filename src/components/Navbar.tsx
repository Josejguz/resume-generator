'use client'

import React from 'react';
import { LightBulbIcon, UserCircleIcon } from '@heroicons/react/16/solid';

export default function Navbar() {

    const handleLogin = () => {
        window.location.href = '/login';
    }

    const onClickProfile = () => {
        window.location.href = '/profile';
    }

    return (
        <nav className='sticky top-0 left-0 z-50 h-20 bg-home'>
            <div className='container mx-auto flex justify-between items-center p-4 h-20'>
                <a href='/'><h1 className='text-2xl font-bold text-white'>Resumade</h1></a>
                <ul className='flex space-x-8 p-4'>
                    <li>
                        <a href='./templates' className='text-white'>Templates</a>
                    </li>
                    <li>
                        <a href='./tips' className='text-white'>Tips</a>
                    </li>
                    <li>
                        <a href='./build' className='text-white'>Build</a>
                    </li>
                </ul>
                <button className='bg-amber-400 px-3 py-1 rounded-2xl text-white' onClick={handleLogin} >Login</button>
                <UserCircleIcon className='h-8 w-8 text-white hover:cursor-pointer' onClick={onClickProfile} />
            </div>
        </nav>
    )
}