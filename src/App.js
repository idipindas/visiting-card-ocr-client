// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import CardMain from './components/CardMain';
import UploadCard from './components/UploadCard';

function App() {
  return (
    <div className="App">
          <Router>

     {/* <CardMain/> */}
     <Routes>
      <Route path='/' element={<CardMain/>}/>
      <Route path='/upload' element={<UploadCard/>}/>
     </Routes>
     </Router>

    </div>
  );
}

export default App;
