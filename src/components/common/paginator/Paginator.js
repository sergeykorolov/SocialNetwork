import style from "./Paginator.module.css";
import React from "react";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(page =>
                <span
                    onClick={(event) => {
                        onPageChanged(page)
                    }}
                    className={currentPage === page && style.selectedPage}>{page}</span>
            )}
        </div>
    )
}

export default Paginator;