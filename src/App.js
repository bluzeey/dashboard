import Input from './components/Input'
import './App.css';
import Teamstable from './components/Table';
import {useState} from 'react';

function App() {
  const [showSidebar,setShowSidebar]=useState(false)
  return (
    <div className="App">
      <Input/>
      <Teamstable showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </div>
  );
}

export default App;
