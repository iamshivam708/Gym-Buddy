import Signup from "./components/User/Signup"
import Login from './components/User/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/main" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
