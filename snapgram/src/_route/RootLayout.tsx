import BottomBar from '@/components/shared/BottomBar'
import LeftsideBar from '@/components/shared/LeftsideBar'
import Topbar from '@/components/shared/Topbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className="w-full md:flex">
            <Topbar />
            <LeftsideBar />

            <section className="flex flex-1 h-full">
                <Outlet />
            </section>

            <BottomBar />
        </div>
    )
}

export default RootLayout
