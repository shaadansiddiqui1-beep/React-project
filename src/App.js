import Navbar from "./Mycomponents/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Mycomponents/About";
import { useState } from "react";
import TextForms from "./Mycomponents/TextForms";
import Alert from "./Mycomponents/Alert";
import Footer from "./Footer";
import {
  Routes,
  Route
} from "react-router-dom";
function App(){

  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }
  

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }
  return(
    
    <div>
      <Navbar title="textUtil" about="AboutUtil" mode={mode} toggleMode={toggleMode }/>
      <Alert alert={alert}/>
      {/* <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
      {/* <About mode={mode}/> */}
      <div className="container">

  <Routes>

    <Route
      path="/"
      element={
        <TextForms
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
      }
    />

    <Route
      path="/about"
      element={<About mode={mode}/>}
    />

  </Routes>

</div>
      <Footer />
    </div>
    
  )
}
export default App; 