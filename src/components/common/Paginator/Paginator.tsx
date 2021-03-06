import style from "./Paginator.module.css";
import React, {FC, useState} from "react";
import cn from "classnames";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={style.paginator}>
        {portionNumber > 1 &&
        <button className={style.prev} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}

        {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map((page) => {
                return <span className={cn({[style.selectedPage]: currentPage === page}, style.pageNumber)}
                             key={page}
                             onClick={(event) => {
                                 onPageChanged(page);
                             }}>{page}</span>
            })}
        {portionCount > portionNumber &&
        <button className={style.next} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>
        }
    </div>
};

export default Paginator;