import { store } from "./redux/Store";
import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import UploadnewAudio from "./components/UploadnewAudio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<UploadnewAudio />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
