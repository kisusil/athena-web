import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from "./pages/login/loginPage";
import './index.css';
import ApplicationsPage from "./pages/applications/applicationsPage";
import UsersPage from "./pages/users/usersPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage/>
  </React.StrictMode>
);