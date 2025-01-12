import React from 'react';
import { useDispatch } from 'react-redux';
import { addSocial, deleteSocial } from '../actions';  

const SocialMediaPage = ({ resume }) => {
  const dispatch = useDispatch();

  const handleAddSocial = () => {
    const newSocial = '';  
    dispatch(addSocial(newSocial));
  };

  return (
    <div>
      <h2>Social Media</h2>
      {resume.social.map((social, index) => (
        <div key={index}>
          <input
            type="text"
            name="social"
            value={social}
            onChange={(e) => {}}
            placeholder="Social Media Link"
          />
          <button onClick={() => dispatch(deleteSocial(index))}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddSocial}>Add Social</button>
    </div>
  );
};

export default SocialMediaPage;
