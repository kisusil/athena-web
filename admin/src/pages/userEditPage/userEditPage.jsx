import React, {useEffect, useState} from "react";
import {getLoggedInAdmin, getSelectedUser} from "../../data/users";
import {useNavigate} from "react-router-dom";
import AdminCard from "../../components/adminCard/adminCard";
import UserCard from "../../components/userCard/userCard";
import Navigation from "../../components/navigation/navigation";

function UserEditPage() {
    const [user,] = useState(getSelectedUser());
    const navigate = useNavigate();

    useEffect(() => {
        if (!getLoggedInAdmin()) {
            navigate("/login");
            return;
        }
        if (!user) {
            navigate("/users");
        }
    }, [navigate, user]);

    return (
        <div className="tab-body">
            <Navigation activeTab={1}/>
            {user && user.admin && (
                <AdminCard user={user}/>
            )}
            {user && !user.admin && (
                <UserCard user={user}/>
            )}
        </div>
    )
}

export default UserEditPage;