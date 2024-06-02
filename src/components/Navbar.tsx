import React from 'react';
import { LightBulbIcon } from '@heroicons/react/16/solid';

export default function Navbar() {
    return (
        <nav className='sticky top-0 left-0 z-50 h-20 bg-red-500'>
            <div className='container mx-auto flex justify-between items-center p-4 h-20'>
                <a href='/'><h1 className='text-2xl font-bold text-white'>Resumade</h1></a>
                <ul className='flex space-x-8 p-4'>
                    <li>
                        <a href='#' className='text-white'>Templates</a>
                    </li>
                    <li>
                        <a href='#' className='text-white'>Tips</a>
                    </li>
                    <li>
                        <a href='#' className='text-white'>Build</a>
                    </li>
                </ul>
                <a href='#' className='bg-amber-400 px-3 py-1 rounded-2xl'><h3 className='text-white'>Login</h3></a>
            </div>
        </nav>
    )
}