import React from "react";
import Moment from "react-moment";
import { connect } from 'react-redux';
import {deleteLog , setCurrent} from '../../../Actions/LogActions'

const LogItem = ({ log,deleteLog, setCurrent }) => {

  const onDelete = () =>{
    deleteLog(log.id)
  }

  
  return (
    <li className="collection-item">
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
          
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last update by by{" "}
          <span className="black-text bold">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={onDelete}>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, {deleteLog , setCurrent}) (LogItem);
