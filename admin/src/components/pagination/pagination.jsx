import React from "react";
import './pagination.css';

function chooseClassesForPaginationControl(isAvailable) {
    if (isAvailable) return "pagination-control";
    return "pagination-control-disabled";
}

function Pagination(props) {
    return (
        <section className="pagination">
            <svg
                className={chooseClassesForPaginationControl(props.isPrevAvailable)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={props.isPrevAvailable ? props.onPrevPage : () => ""}
            >
                <g id="Icon" opacity="0.5">
                    <path id="Vector" fillRule="evenodd" clipRule="evenodd"
                          d="M15.1492 5.06281C15.6667 5.47682 15.7506 6.23197 15.3366 6.74948L11.1363 11.9998L15.3366 17.2502C15.7506 17.7677 15.6667 18.5229 15.1492 18.9369C14.6317 19.3509 13.8765 19.267 13.4625 18.7495L8.66252 12.7495C8.31191 12.3112 8.31191 11.6885 8.66252 11.2502L13.4625 5.25021C13.8765 4.7327 14.6317 4.64879 15.1492 5.06281Z"
                          fill="#717782"/>
                </g>
            </svg>
            <div className="number">{props.pageNumber}</div>
            <svg
                className={chooseClassesForPaginationControl(props.isNextAvailable)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={props.isNextAvailable ? props.onNextPage : () => ""}
            >
                <g id="Icon" opacity="0.5">
                    <path id="Vector" fillRule="evenodd" clipRule="evenodd"
                          d="M8.8508 18.9372C8.33329 18.5232 8.24938 17.768 8.66339 17.2505L12.8637 12.0002L8.66339 6.74978C8.24938 6.23227 8.33329 5.47712 8.8508 5.06311C9.36831 4.6491 10.1235 4.733 10.5375 5.25052L15.3375 11.2505C15.6881 11.6888 15.6881 12.3115 15.3375 12.7498L10.5375 18.7498C10.1235 19.2673 9.36832 19.3512 8.8508 18.9372Z"
                          fill="#717782"/>
                </g>
            </svg>
        </section>
    );
}

export default Pagination;