import React, {useState} from "react";
import './usersPage.css';
import Navigation from "../../components/navigation/navigation";
import TextField from "../../components/textField/textField";
import Button from "../../components/button/button";
import Pagination from "../../components/pagination/pagination";
import Table from "../../components/table/table";

function UsersPage() {
    const [loginPattern, setLoginPattern] = useState(undefined);

    return (
        <div className="tab-body">
            <Navigation/>
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
                    />
                </section>
                <Table/>
                <section className="table-buttons">
                    <section className="buttons">
                        <Button
                            name="Добавить пользователя"
                            state="active"
                            size="large"
                            accentColor="blue"
                        />
                        <Button
                            name="Добавить администратора"
                            state="active"
                            size="large"
                            accentColor="blue"
                        />
                    </section>
                    <Pagination/>
                </section>
            </section>
        </div>
    );
}

export default UsersPage;