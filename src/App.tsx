import "./styles/App.css";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Counter from "./app/features/counter/Counter";
import UserProfile from "./app/features/user/UserProfile";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";
import Login from "./components/Login";

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
