import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../../Actions/TechActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName !== '' || lastName !== '') {
      const tech = {
        firstName,
        lastName,
      };

      addTech(tech);
      M.toast({
        html: `${firstName} ${lastName} was added to the Tech list`,
      });

      setFirstName('');
      setLastName('');
    } else {
      M.toast({
        html: 'Please fill in all fields',
      });
    }
  };

  return (
    <div id="tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-green btn"
        >
          Submit
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addTech })(AddTechModal);
