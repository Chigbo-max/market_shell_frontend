import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/mainLayout"
import HomePage from "../components/ui/home/HomePage"
import NotFound from "../components/ui/NotFound"
import ProductPage from "../components/ui/products/ProductPage"
import CartPage from "../components/ui/cart/CartPage"




const browserRouter = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage />
            },

            {
                path: "*",
                element: <NotFound/>
            },
            {
                path:"/detail/:slug",
                element:<ProductPage/>
            },

            {
                path:"/cart",
                element:<CartPage/>
            }

            // {
            //     path: "/signUp",
            //     element: <SignUp />
            // },

            // {
            //     path: "/login",
            //     element: <Login />
            // }
        ]
    }
]

)

export default browserRouter