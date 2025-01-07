import logo from './logo.svg';
import './App.css';
import DisplayPic from './lesson_2/commpenants/DisplayPic';
import GetResponse from './lesson_3/compenants/Get';
import Nav from './lesson_4/components/Nav'
import HomePageScreen from './lesson_4/Screens/HomePageScreen'
import Card from './lesson_4/components/homePageComponents/Card';
function App() {
  return (
    <>
    {/* // <DisplayPic></DisplayPic>
    //<GetResponse></GetResponse> */}
      <Nav></Nav>
      {/* //<HomePageScreen></HomePageScreen> */}
<HomePageScreen></HomePageScreen>
    </>
  
  );

}

export default App;
