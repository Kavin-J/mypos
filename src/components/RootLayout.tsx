import React from 'react'
import SideNav from './sidenav/SideNav'
import { Outlet } from 'react-router'

type Props = {}

export default function RootLayout({ }: Props) {
    return (
        <div aria-describedby='rootlayout' className="mx-auto w-full flex h-full overflow-hidden select-none">

            <SideNav />
            {/* 
            //!! bg green here 
            */}
            <div aria-description='Outlet' className=' bg-green-300 flex-1 overflow-hidden h-screen'><Outlet /> </div>
        </div >
    )
}

