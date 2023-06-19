import { useState } from "react";
function useSort(data, config) {
    const [sortOrder, setSortOrder] =  useState(null);
    const [sortBy, setSortBy] =  useState(null); //keep track of what column we currently sort by

    
    const setSortColumn = (label)=> {
        //case the user want to change the sortby column (ex: sort by name instead of score...)
        if (sortBy && label!==sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return ;
        }
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };
        //Make a copy of the data prop (we never ever make changes on the array that is used as PROP)
        let sortedData = data;
        //Only sort data if sortOrder && sortBy are not null
        if (sortOrder && sortBy) {
            //find the correct sort attribute to sort by and use it for sorting
            const {sortValue} = config.find(column=> column.label === sortBy);

            sortedData = [...data].sort((a,b)=> {
                const valueA = sortValue(a);
                const valueB = sortValue(b);

                const reverseOrder = sortOrder === 'asc'? 1 : -1;

                if (typeof valueA === 'string') {
                    return valueA.localeCompare(valueB) * reverseOrder; //string based comparison
                } else {
                    return (valueA - valueB) * reverseOrder; //number based comparison
                }
            })
        }

        return {
            sortBy,
            sortOrder,
            setSortColumn,
            sortedData
        }
}

export default useSort;