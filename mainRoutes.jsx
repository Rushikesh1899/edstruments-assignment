import React from "react"
import { useRoutes } from "react-router-dom"
import ProtectedRoute from "./src/context/ProtectedRoute"
const Login = React.lazy(() => import("./src/views/pages/login/Login"));
const Signup = React.lazy(() => import("./src/views/pages/signup/Signup"));
const CreateNewInvoice = React.lazy(() => import("./src/views/pages/InvoiceForm/InvoiceForm"))
const Layout = React.lazy(() => import("./src/views/components/layout/Layout")) 


export const MainRoutes = () => {

    return useRoutes([{
        path: "/",
        element: <Login />
    },
    { path: "/signup", element: <Signup /> },
    {
      element: (
        <ProtectedRoute >
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "invoiceForm", element: <CreateNewInvoice /> },
      ],
    },
])
}