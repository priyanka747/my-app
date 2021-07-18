import React, {useState} from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import MenuOptionOne from './components/menuoptionone/Menuoptionone'


const App = ()=>  {
  const [name, setName] =useState("Jason Statham");
  return (
    <div>
     <Topbar name={name}/>
     <div className="container">
        <Sidebar />
        {/* <div className="others"> */}
        <MenuOptionOne/>
        {/* </div> */}
        </div>
    </div>
  );
}

export default App;
