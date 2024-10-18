import React from "react";
import "./styles/App.css";
import SideNav from "./components/sidenav/SideNav";
import Rest from "./components/Restcode";
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
const router = createBrowserRouter([
    {
        path: '/',
        element: (<RootLayout />),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: (<Homepage />),

            },
            {
                path: 'posc',
                element: (<Counter />)
            },
            {
                path: 'user',
                element: (<UserProfile />)
            }
        ]

    },
    {
        path: '/login',
        element: (<div className="flex  justify-center items-center"><h5>Login</h5></div>)
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
