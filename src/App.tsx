import { useEffect } from 'react';
import './App.css';
import { Menu, Words } from './Components/components';



function App(add: any,) {


  return (
    <div className="App">
      <Menu Add={add} add={add}  ></Menu>
    </div>
  );
}

export default App;
