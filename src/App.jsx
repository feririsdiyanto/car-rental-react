import "./App.css";
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sewa from "./pages/Sewa";
import Detail from './pages/Detail';

function App() {
  return (
    <>
      {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sewa' element={<Sewa />} />
          <Route path="/cari/detail/:id" element={<Detail />} />
        </Routes>
    </>
  )
}

export default App;
