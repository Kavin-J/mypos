import React from "react";
import "./styles/App.css";
import SideNav from "./components/sidenav/SideNav";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import path from "path";
import Counter from "./app/features/counter/Counter";
import UserProfile from "./app/features/user/UserProfile";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/home/Homepage";
import Login from "./components/loginPage/Login";
import ProtectedRoute from "./components/ProtectRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: (<RootLayout />),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: (<ProtectedRoute ><Homepage /></ProtectedRoute>),

            },
            {
                path: 'dashboard',
                element: (<Counter />)
            },
            {
                path: 'store',
                element: (<UserProfile />)
            }
        ]

    },
    {
        path: '/login',
        element: (<Login />)
    },


])

function App() {

    return (
        <div className="w-screen h-screen overflow-hidden">

            <RouterProvider router={router} />
        </div>


    );
}

export default App;
