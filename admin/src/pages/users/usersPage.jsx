import React, {useEffect, useState} from "react";
import './usersPage.css';
import Navigation from "../../components/navigation/navigation";
import TextField from "../../components/textField/textField";
import Button from "../../components/button/button";
import Pagination from "../../components/pagination/pagination";
import Table from "../../components/table/table";
import {useNavigate} from "react-router-dom";
import {getLoggedInAdmin, getUsersGlobalFilteredByLogin, selectUser} from "../../data/users";

function UsersPage() {
    const [loginPattern, setLoginPattern] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [page, setPage] = useState(getUsersGlobalFilteredByLogin('', 5, pageNumber));
    const navigate = useNavigate();

    useEffect(() => {
        if (!getLoggedInAdmin()) {
            navigate("/login");
        }
    })
    if (!getLoggedInAdmin()) {
        return (<></>);
    }

    function onNextPage() {
        if (pageNumber >= page.totalPages) return;

        setPageNumber(pageNumber + 1);
        setPage(getUsersGlobalFilteredByLogin(loginPattern, 5, pageNumber + 1));
    }

    function onPrevPage() {
        if (pageNumber <= 1) return;

        setPageNumber(pageNumber - 1);
        setPage(getUsersGlobalFilteredByLogin(loginPattern, 5, pageNumber - 1));
    }

    function onSearch() {
        setPageNumber(1);
        setPage(getUsersGlobalFilteredByLogin(loginPattern, 5, 1));
    }

    function onUserSelected(id) {
        selectUser(id);
        navigate("/user-edit");
    }

    return (
        <div className="tab-body">
            <Navigation activeTab={1}/>
            <article>
                <h1>Пользователи</h1>
            </article>
            <section className="tab-block">
                <section className="searchForm">
                    <TextField
                        title="Поиск по логину"
                        type="text"
                        placeholder="Введите логин"
                        value={loginPattern}
                        setValue={setLoginPattern}
                    />
                    <Button
                        name="Поиск"
                        state="active"
                        size="medium"
                        accentColor="blue"
                        onClick={onSearch}
                    />
                </section>
                <Table
                    pageContent={page.content}
                    onUserSelected={onUserSelected}
                />
                <section className="table-buttons">
                    <section className="buttons">
                        <Button
                            name="Добавить пользователя"
                            state="active"
                            size="large"
                            accentColor="blue"
                            onClick={() => navigate("/new-user")}
                        />
                        <Button
                            name="Добавить администратора"
                            state="active"
                            size="large"
                            accentColor="blue"
                            onClick={() => navigate("/new-admin")}
                        />
                    </section>
                    <Pagination
                        pageNumber={pageNumber}
                        onPrevPage={onPrevPage}
                        isPrevAvailable={pageNumber > 1}
                        onNextPage={onNextPage}
                        isNextAvailable={pageNumber < page.totalPages}
                    />
                </section>
            </section>
        </div>
    );
}

export default UsersPage;