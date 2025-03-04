import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteFromRecycleBin, deleteFromTheTasks, reconstructionTask } from '../redux/Actions';
const DisplayRycycleBin = () => {
    const dispatch = useDispatch();
    const theTasksInTheRecycleBin = useSelector((state) => state.recycleBin.theTasksInTheRecycleBin);
    const [Name, setName] = useState('');
    return (
        <>
        <h1>my recycle bin:</h1>
          {/* console.log(theTasksInTheRecycleBin); */}
            {theTasksInTheRecycleBin.map(i => (<div><p>{i.Name}</p>
                <button onClick={() => {
                    dispatch(deleteFromRecycleBin({ Name:i.Name }))
                }}>remove the task permanently❗❗❗</button></div>))}
            {/* <input onBlur={(e) => setName(e.target.value)} placeholder='Name of your task' /> */}

            <button onClick={() => {
                dispatch(reconstructionTask({ Name: Name }))
            }}>reconstruction🔄️ </button>

        </>);
}
export default DisplayRycycleBin;