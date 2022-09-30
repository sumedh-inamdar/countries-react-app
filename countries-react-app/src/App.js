import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Country from "./components/Country/Country";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:country' element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
