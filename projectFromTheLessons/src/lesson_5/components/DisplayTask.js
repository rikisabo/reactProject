import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, addTaskToTheRecycleBin, deleteFromRecycleBin, deleteFromTheTasks, reconstructionTask } from '../redux/Actions';
// import rootReducer from '../redux/Store';
const DisplayTask = () => {
    const dispatch = useDispatch();
    const theTasks = useSelector((state) => state.tasks.theTasks);
    console.log(theTasks);
    const [Name, setName] = useState('');
    return (
        <>
        <h1>my tasks!!!:</h1>
            {theTasks.map(i => (<div><p>{i.Name}</p>
                <button onClick={() => {
                    dispatch(addTaskToTheRecycleBin({ Name:i.Name }))
                }}>remove the task</button></div>))}
            <input onBlur={(e) => setName(e.target.value)} placeholder='Name of your task' />

            <button onClick={() => {
                dispatch(addTask({ Name: Name }))
            }}>add the task😂 </button>

        </>);
}
export default DisplayTask;