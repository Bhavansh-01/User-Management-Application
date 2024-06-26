import './App.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/adduser' element={<AddUser />}></Route>
          <Route path='/edituser/:id' element={<EditUser />}></Route>
          <Route path='/viewuser/:id' element={<ViewUser />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
