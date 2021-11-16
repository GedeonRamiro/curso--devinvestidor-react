import { useContext, useState, useEffect } from "react";
import useDebounce from "_common/hooks/useDebounce";
import { TaskListContext } from "../context/TaskListContext";
import TaskListFilterView from "./TaskListFilterView"


const TaskListFilter = () => {

    const { setFilter } = useContext(TaskListContext)

    const [searchTerm, setSerachTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm);

    const handleChangeSearchTerm = (event) => setSerachTerm(event.target.value);

    useEffect(() => {
        setFilter(debouncedSearchTerm)

    }, [debouncedSearchTerm, setFilter])
  
    return (
       <TaskListFilterView {...{handleChangeSearchTerm}} />
    )
}

export default TaskListFilter