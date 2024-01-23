import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from "./pages/login/loginPage";
import './data/storage';
import ProfilePage from "./pages/profile/profilePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexPage from "./pages/indexPage";
import ChatsPage from "./pages/chats/chatsPage";
import NotificationsPage from "./pages/notifications/notificationsPage";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/profile",
        element: <ProfilePage/>,
    },
    {
        path: "/chats",
        element: <ChatsPage/>,
    },
    {
        path: "/notifications",
        element: <NotificationsPage/>,
    },
    {
        path: "/",
        element: <IndexPage/>,
    }
], { basename: '/~s312578/project/messenger' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);