import React, {useRef} from 'react'
import { connect } from 'react-redux';
import {search} from '../../Actions/LogActions';

const SearchBar = ({ search }) => {

  const text = useRef('');

  const onChange = (e)=>{
    search(text.current.value);
  }

    return (
        
        <nav className="blue" style={{ marginBottom: '30px' }}>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" placeholder=" Search Logs.... " ref={text} onChange={onChange}/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    
  
    )
}

export default connect(null, { search }) (SearchBar)
