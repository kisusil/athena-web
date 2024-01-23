import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from "./pages/login/loginPage";
import './index.css';
import ApplicationsPage from "./pages/applications/applicationsPage";
import UsersPage from "./pages/users/usersPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LogoutPage from "./pages/logoutPage/logoutPage";
import IndexPage from "./pages/indexPage/indexPage";
import './data/storage';
import UserEditPage from "./pages/userEditPage/userEditPage";
import NewUserPage from "./pages/newUserPage/newUserPage";
import NewAdminPage from "./pages/newAdminPage/newAdminPage";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage/>,
    },
    {
        path: '/applications',
        element: <ApplicationsPage/>,
    },
    {
        path: '/users',
        element: <UsersPage/>,
    },
    {
        path: '/user-edit',
        element: <UserEditPage/>,
    },
    {
        path: '/logout',
        element: <LogoutPage/>,
    },
    {
        path: '/new-user',
        element: <NewUserPage/>,
    },
    {
        path: '/new-admin',
        element: <NewAdminPage/>,
    },
    {
        path: '/',
        element: <IndexPage/>,
    }
], { basename: '/~s312578/project/admin' })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);