import { useState, memo } from "react";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextAreaForm from "./components/TextAreaForm";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


let cgreen = 0, cred = 0, cblue = 0, cblack = 0;

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = (color) => {
    console.log(color);
    switch (color) {
      case 'success':
        if (cgreen > 0) {
          setMode("light");
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
          document.title = "TextUtils - Light Mode";
          showAlert("Light mode has been enabled", "success");
          cgreen--;
        }
        else {
          setMode(color);
          document.body.style.backgroundColor = "#346751";
          document.body.style.color = "white";
          document.title = "TextUtils - Green Mode";
          showAlert("Green mode has been enabled", "success");
          cgreen++;
        }
        break;
      case "danger":
        if (cred > 0) {
          setMode("light");
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
          document.title = "TextUtils - Light Mode";
          showAlert("Light mode has been enabled", "success");
          cred--;
        }
        else {
          setMode(color);
          document.body.style.backgroundColor = "#A13333";
          document.body.style.color = "white";
          document.title = "TextUtils - Red Mode";
          showAlert("Red mode has been enabled", "success");
          cred++;
        }
        break;
      case "primary":
        if (cblue > 0) {
          setMode("light");
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
          document.title = "TextUtils - Light Mode";
          showAlert("Light mode has been enabled", "success");
          cblue--;
        } else {
          setMode(color);
          document.body.style.backgroundColor = "#6E85B2";
          document.body.style.color = "white";
          document.title = "TextUtils - Blue Mode";
          showAlert("Blue mode has been enabled", "success");
          cblue++;
        }
        break;
      case "dark":
        if (cblack > 0) {
          setMode("light");
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
          document.title = "TextUtils - Light Mode";
          showAlert("Light mode has been enabled", "success");
          cblack--;
        }
        else {
          setMode(color);
          document.body.style.backgroundColor = "#444444";
          document.body.style.color = "white";
          document.title = "TextUtils - Dark Mode";
          showAlert("Dark mode has been enabled", "success");
          cblack++;
        }
        break;
      default:
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.title = "TextUtils - Home";
        showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextAreaForm mode={mode} alert={showAlert} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default memo(App);
