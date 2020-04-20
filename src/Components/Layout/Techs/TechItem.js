import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../../Actions/TechActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const removeTech = () => {
    deleteTech(id);

    M.toast({
      html: `${firstName} ${lastName} has been removed from the list`,
    });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={removeTech}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTech })(TechItem);
