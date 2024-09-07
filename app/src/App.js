import Main from "./components/Main/Main";
import Admin from "./components/Admin/Admin";
import Notfoundpage from "./components/Notfoundpage/Notfoundpage";
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="*" element={<Notfoundpage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
