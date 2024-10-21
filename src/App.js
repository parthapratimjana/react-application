import './App.scss';
import Header from "./common/Header"
import Routers from './common/Routes';
import Sidebar from "./common/Sidebar"
function App() {
  return (
    <main className="main">
    <Header/>
    <Sidebar/>
    
       <Routers/>
    </main>
      
  );
}

export default App;
