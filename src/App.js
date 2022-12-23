import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ClassComp from './ClassComp';
import Stylings from './components/stylings/Stylings';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import ListsandKeys from './components/ListsandKeys';
import ContactUs from './components/ContactUs';
import Routing from './components/Routing/Routing';
import BasicHook from './components/Hooks/BasicHook';
import React, { useEffect, useRef } from 'react';
import CompA from './components/Hooks/useContextHook/CompA';
import CompB from './components/Hooks/useContextHook/CompB';

export const  UserContext = React.createContext();

function App() {
  // const data = useRef(null);
  //  console.log(data);
  //  const submithandler = (e)=>{
  //   e.preventDefault();
  //   console.log(data.current.value)
  //  }

  //  useEffect(()=>{
  //   data.current.focus();
  //  },[])


  return (
    <div className="App">
      <Navbar />
      {/* <UserContext.Provider value= {"ReactJs"}>
          <CompA />
          <CompB />
      </UserContext.Provider> */}

      <Routing />
        {/* <div>
          <h2>useRef Hook</h2>
            <form className='mt-5' onSubmit={submithandler}>
              <input type="text" ref={data}  placeholder='Enter your Name' />
              <button className='btn btn-secondary ms-3'>Submit</button>
            </form>

        </div> */}


      {/* 
        useState will re-render when the content change and update in UI.

        useRef doesn't notify you when  its content changes. Mutating the (.current) property
          does't cause a re-render.


      */}

    </div>
  );
}

export default App;
