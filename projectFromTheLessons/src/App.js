import logo from './logo.svg';
import './App.css';
import DisplayPic from './lesson_2/commpenants/DisplayPic';
import GetResponse from './lesson_3/compenants/Get';
import Nav from './lesson_4/components/Nav'
import HomePageScreen from './lesson_4/Screens/HomePageScreen'
import Card from './lesson_4/components/homePageComponents/Card';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './lesson_4/components/conect/Login';
import ThankYou from './lesson_4/components/ThankYou/ThankYou'
function App() {
  return (
    <>
      {/* // <DisplayPic></DisplayPic>
    //<GetResponse></GetResponse> */}
      {/* <Nav></Nav> */}
      {/* //<HomePageScreen></HomePageScreen> */}
      {/* <HomePageScreen></HomePageScreen> */}
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePageScreen></HomePageScreen>}></Route>
          <Route path="/connect" element={<Login></Login>}></Route>
          <Route path="/Thank" element={<ThankYou></ThankYou>}></Route>
        </Routes>

      </BrowserRouter>
    </>

  );

}

export default App;
