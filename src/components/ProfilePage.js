import React from 'react';
import { updateProfile } from '../actions'; 

const ProfilePage = ({ resume, dispatch }) => {
  const handleChange = (e) => {
    dispatch(updateProfile(e.target.name, e.target.value));
  };

  const profile = resume?.profile || {};

  return (
    <div>
      <h2>Profile</h2>
      <input
        type="text"
        name="fname"
        value={profile.fname || ''}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lname"
        value={profile.lname || ''}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="phone"
        value={profile.phone || ''}
        onChange={handleChange}
        placeholder="Mobile Number"
      />
      <input
        type="text"
        name="address"
        value={profile.address || ''}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="url"
        value={profile.url || ''}
        onChange={handleChange}
        placeholder="Profile Image URL"
      />
    </div>
  );
};

export default ProfilePage;
