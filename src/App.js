import React,{useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import './App.css';


import SearchBar from './Components/Layout/SearchBar'
import Logs from './Components/Layout/Logs/Logs'
import AddBtn from './Components/Layout/AddBtn'
import AddlogModal from './Components/Layout/Logs/AddlogModal'
import AddTechModal from './Components/Layout/Techs/AddTechModal'
import EditLogModal from './Components/Layout/Logs/EditLogModal'
import TechListModal from './Components/Layout/Techs/TechListModal'

const App = () => {
  // this is for Init Materialse JS
  useEffect(() =>{
    M.AutoInit()
  })
  return (
    <Fragment >
      <SearchBar/>
      <div className="container">
        <AddBtn />
        <Logs/>
        <AddlogModal />
        <AddTechModal/>
        <TechListModal />
        <EditLogModal />
      </div>
    </Fragment>
  );
}

export default App;
