import logo from './logo.svg';
import './App.css';
import HomePageScreen from './lesson_4/Screens/HomePageScreen'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './lesson_4/components/conect/Login';
import ThankYou from './lesson_4/components/ThankYou/ThankYou'
import {NavBar} from '../src/lesson_4/components/Nav';
import { Provider } from 'react-redux';
import Store from './lesson_5/redux/Store';
import DisplayTask from './lesson_5/components/DisplayTask';
function App() {
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
      <Provider store={Store}>
        
        <DisplayTask></DisplayTask>
        
      </Provider>
    </>
  );

}

export default App;
