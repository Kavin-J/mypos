import React from 'react'

import { Outlet } from 'react-router'
import ProtectedRoute from './ProtectRoute'
import SideNav from './SideNav'

type Props = {}

export default function RootLayout({ }: Props) {

    return (
        <ProtectedRoute >

            <div aria-describedby='rootlayout' className="mx-auto w-full flex h-full overflow-hidden select-none bg-defalt transition-width duration-1000">

                <SideNav />

                <div aria-description='Outlet' className=' overflow-auto h-screen flex-1 '><Outlet /> </div>
            </div >
        </ProtectedRoute>
    )
}

