import React from 'react';

export default function Navbar() {
    return (
        <nav className='sticky top-0 left-0 z-50 h-20 bg-red-500'>
            <div className='container mx-auto flex justify-between items-center p-4'>
                <h1 className='text-2xl font-bold text-white'>Resumade</h1>
                <ul className='flex space-x-4'>
                    <li>
                        <a href='#' className='text-white'>Home</a>
                    </li>
                    <li>
                        <a href='#' className='text-white'>About</a>
                    </li>
                    <li>
                        <a href='#' className='text-white'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}