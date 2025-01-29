import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteFromRecycleBin, deleteFromTheTasks, reconstructionTask } from '../redux/Actions';
const DisplayTask = () => {
    const dispatch = useDispatch();
    const theTasks = useSelector((state) => state.theTasks);
    const [Name, setName] = useState('');
    return (
        <>
            {theTasks.map(i => (<div><p>{i.Name}</p>,
                <button onClick={() => {
                    dispatch(deleteFromTheTasks({ Name:i.Name }))
                }}>remove the task</button></div>))}
            <input onBlur={(e) => setName(e.target.value)} placeholder='Name of your task' />

            <button onClick={() => {
                dispatch(addTask({ Name: Name }))
            }}>add the task😂 </button>

        </>);
}
export default DisplayTask;