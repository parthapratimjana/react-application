import './App.scss';
import Header from "./common/Header"
import Routers from './common/Routes';
import Sidebar from "./common/Sidebar";
import { useEffect } from "react";
function App() {
  // console.log("App js console");
  useEffect(()=>{
    console.log("base url",)
},[])
  return (
    <main className="main">
        <Header />
        <Sidebar />
      <Routers />
    </main>

  );
}

export default App;
