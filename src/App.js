import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ClassComp from './ClassComp';
import Stylings from './components/stylings/Stylings';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/stylings/Navbar';
import ListsandKeys from './components/ListsandKeys';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListsandKeys />



     {/* <h2 className='text-primary'>Welcome to react</h2> */}
     {/* <Header courseName="ReactCourse" duration="3months" />
     <ClassComp />
     <Stylings btnname="internalbtn" externalname="externalbtn" /> */}
    </div>
  );
}

export default App;
