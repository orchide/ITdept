import React,{useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import './App.css';


import SearchBar from './Components/Layout/SearchBar'

const App = () => {
  // this is for Init Materialse JS
  useEffect(() =>{
    M.AutoInit()
  })
  return (
    <Fragment >
      <SearchBar/>
    </Fragment>
  );
}

export default App;
