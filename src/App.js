import { useState, memo } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextAreaForm from "./components/TextAreaForm";

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
    switch (color) {
      case 'success':
        setMode(color);
        document.body.style.backgroundColor = "#346751";
        document.body.style.color = "white";
        document.title = "TextUtils - Green Mode";
        showAlert("Green mode has been enabled", "success");
        break;
      case "danger":
        setMode(color);
        document.body.style.backgroundColor = "#A13333";
        document.body.style.color = "white";
        document.title = "TextUtils - Red Mode";
        showAlert("Red mode has been enabled", "danger");
        break;
      case "primary":
        setMode(color);
        document.body.style.backgroundColor = "#6E85B2";
        document.body.style.color = "white";
        document.title = "TextUtils - Blue Mode";
        showAlert("Blue mode has been enabled", "primary");
        break;
      case "warning":
        setMode(color);
        document.body.style.backgroundColor = "#FFD369";
        document.body.style.color = "white";
        document.title = "TextUtils - Yellow Mode";
        showAlert("Yellow mode has been enabled", "warning");
        break;
      case "light":
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.title = "TextUtils - Home";
        showAlert("Light mode has been enabled", "light");
        break;
      case "dark":
        setMode(color);
        document.body.style.backgroundColor = "#444444";
        document.body.style.color = "white";
        document.title = "TextUtils - Dark Mode";
        showAlert("Dark mode has been enabled", "dark");
        break;
      default:
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.title = "TextUtils - Home";
        showAlert("Light mode has been enabled", "light");
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextAreaForm mode={mode} alert={showAlert} />
    </>
  );
}

export default memo(App);
