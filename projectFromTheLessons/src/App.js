import logo from './logo.svg';
import './App.css';
import HomePageScreen from './lesson_4/Screens/HomePageScreen'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './lesson_4/components/conect/Login';
import ThankYou from './lesson_4/components/ThankYou/ThankYou'
import { NavBar } from '../src/lesson_4/components/Nav';
import { Provider } from 'react-redux';
import rootReducer from './lesson_5/redux/Store';
import { Store } from './lesson_5/redux/Store';
import DisplayTask from './lesson_5/components/DisplayTask';
import DisplayRycycleBin from './lesson_5/components/DidplayRycycleBin';
import Message from './lesson_6/components/Message';
import Chat from './lesson_6/components/Message';
import { LogProps } from './lesson_7 hoc/LogProps';
import Welcome from './lesson_7 hoc/Welcome';
import { Login7 } from './lesson_7 custom hook/components/Login';
function App() {
  const MyHoc = LogProps(Welcome);
  return (
    <>
      {/* <BrowserRouter>
        <NavBar></NavBar>     
           <Routes>
          <Route path="/" element={<HomePageScreen></HomePageScreen>}></Route>
          <Route path="/connect" element={<Login></Login>}></Route>
          <Route path="/Thank" element={<ThankYou></ThankYou>}></Route>
        </Routes>

      </BrowserRouter> */}
      {/* <Provider store={Store}>
        
        <DisplayTask></DisplayTask>
        <DisplayRycycleBin></DisplayRycycleBin>
      </Provider> */}
      {/* <Message></Message> */}
      {/* <Chat></Chat> */}
      <Login7></Login7>
      <MyHoc name="sara"></MyHoc>
    </>
  );

}

export default App;
