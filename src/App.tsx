import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import MenuOptionOne from './components/menuoptionone/Menuoptionone'
import './app.css'

const App = ()=>  {
  
  return (
    <div>
     <Topbar />
     <div className="container">
        <Sidebar />
        {/* <div className="others"> */}
        <div className="main">
        <MenuOptionOne/>
        </div>
          
        {/* </div> */}
        </div>
    </div>
  );
}

export default App;
