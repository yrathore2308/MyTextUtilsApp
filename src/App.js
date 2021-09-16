import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
    document.body.style.backgroundColor='#1c2e47';
    showAlert("Dark Mode has been enbabled","success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enbabled","success")


    }
  };
  return (
    <>
      
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <div className="container my-3">
        <TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode}/>
      
       </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
