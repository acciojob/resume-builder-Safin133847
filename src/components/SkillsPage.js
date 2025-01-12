// src/components/SkillsPage.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, deleteSkill } from '../actions'; // Assuming you have these action creators

const SkillsPage = () => {
  const dispatch = useDispatch();
  const skills = useSelector(state => state.resume.skills); // Accessing skills from the Redux store

  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() === '') return;
    dispatch(addSkill(newSkill)); // Dispatch action to add new skill
    setNewSkill(''); // Clear input field after adding
  };

  const handleDeleteSkill = (index) => {
    dispatch(deleteSkill(index)); // Dispatch action to delete skill
  };

  return (
    <div>
      <h2>Skills</h2>
      <div>
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)} // Update state as user types
          placeholder="Enter a new skill"
        />
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>

      <div>
        <h3>Your Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill} 
              <button onClick={() => handleDeleteSkill(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsPage;
