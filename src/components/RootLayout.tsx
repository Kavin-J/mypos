import React from 'react'
import SideNav from './sidenav/SideNav'
import { Outlet } from 'react-router'
import ProtectedRoute from './ProtectRoute'

type Props = {}

export default function RootLayout({ }: Props) {

    return (
        <ProtectedRoute >

            <div aria-describedby='rootlayout' className="relative mx-auto w-full flex h-full overflow-hidden select-none ">

                <SideNav />

                <div aria-description='Outlet' className=' bg-green-300 flex-1  overflow-auto h-screen '><Outlet /> </div>
            </div >
        </ProtectedRoute>
    )
}

