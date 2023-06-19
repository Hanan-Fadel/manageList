import Table from "./Table";
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';
import useSort from "../hooks/use-sort";

function SortableTable(props) {

    const {config, data} = props;

    const {sortBy, sortOrder, setSortColumn, sortedData} =  useSort(data, config);

    const updatedConfig = config.map((column)=> {
        if (!column.sortValue) //if this column is non-sortable)
        {
            return column;
            
        } 
        return { //if the column is sortable, customize it 
            ...column,
            header: ()=> 
                <th className="cursor-pointer hover:bg-gray-100" onClick={()=> setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label} 
                    </div>
                </th>
        };
          
    });
    return (<Table {...props} data={sortedData} config={updatedConfig}/>);
}

function getIcons(label, sortBy, sortOrder) {
    if(label !== sortBy) {
        //no sort - show both icons
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    } 
    if (sortOrder === null) {
        //no sort - show both icons
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallUp />
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <GoArrowSmallDown />
        </div>
    }
}
export default SortableTable;