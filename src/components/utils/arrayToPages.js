import { useState, useCallback } from "react";

export const usePages = () => {
    let [pages, setPages] = useState([]);
    let [currentPage, setCurrentPage] = useState(0);

    const arrayToPages = useCallback((array) => {
        let newArray = [];
        let pages = Math.floor(array.length / 5);
        let mainIndex = 0;

        console.log(array.length % 5)

        if(array.length % 5) pages += 1;

        for(let i = 0; i < pages; i++) {
            newArray.push([]);
        }

        array.forEach((item, index) => {
            let fixedIndex = index + 1;

            if(!(fixedIndex % 5) && mainIndex <= pages) {
                newArray[mainIndex].push(item);
                mainIndex += 1;
            }
            else {
                newArray[mainIndex].push(item);
            }
        })

        setPages(newArray);

        if(currentPage > (newArray.length - 1)) {
            setCurrentPage(currentPage - 1);
        }
    }, [currentPage])

    const changeCurrentPage = (value) => {
        setCurrentPage(value)
    }
    
    return {
        pages,
        currentPage,
        changeCurrentPage,
        arrayToPages
    }
}