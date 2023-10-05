import React from 'react'
import { Outlet } from 'react-router-dom'
import RightBar from './rightbar'
import Sidebar from './sidebar'

const MainLayout = () => {
    return (
        <div className='w-[1265px] mx-auto flex'>
            <Sidebar />
            <main className='flex-1 flex gap-[30px]'>
                <div className='flex-1 max-w-[600px] border-x border-[#2f3336]'>
                    <Outlet />
                </div>
            </main>
            <RightBar />
        </div>
    )
}

export default MainLayout