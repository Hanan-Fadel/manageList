import { Fragment } from "react";

function Table({data, config, keyFn}) {
    const renderedHeaders = config.map((column)=> {
        if (column.header) { //customized header
            return <Fragment key={column.label}>{column.header()}</Fragment>; //with Fragment nothing will be added to DOM
        } 
        return <th className="p-2" key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells= config.map((column)=> {
            return <td key={column.label}>{column.render(rowData)}</td>
        });

        return(<tr className="border-b" key={keyFn(rowData)}>{renderedCells}</tr>);
    });



    return <div>
         <table className="table-auto border-spacing-2">
                <thead>
                   <tr>{renderedHeaders}</tr>
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
            <div>
               
            </div>
    </div>;
}

export default Table;