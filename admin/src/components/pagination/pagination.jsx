import React from "react";
import './pagination.css';

function Pagination() {

    return (
        <section className="pagination">
            <img src="iconArrow-left.svg" alt="Преыдущая"/>
            <img src="iconPaging.svg" alt="Номер страницы"/>
            <img src="iconArrow-right.svg" alt="Следующая"/>
        </section>
    );
}

export default Pagination;