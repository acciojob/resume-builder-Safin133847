import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, addEducation, deleteEducation, addSkill, deleteSkill, addProject, deleteProject, addSocial } from '../actions';  
import ProfilePage from '../components/ProfilePage';
import EducationPage from '../components/EducationPage';  
import SkillsPage from '../components/SkillsPage';  
import ProjectsPage from '../components/ProjectsPage'; 
import SocialMediaPage from '../components/SocialMediaPage';  
import '../styles/App.css';  

const App = () => {
  const [page, setPage] = useState(1);
  const resume = useSelector(state => state.resume);  
  const dispatch = useDispatch();

  const handleNext = () => setPage(page + 1);
  const handleBack = () => setPage(page - 1);

  return (
    <div className="resume-builder">
      {page === 1 && (
        <ProfilePage resume={resume} dispatch={dispatch} />
      )}
      {page === 2 && (
        <EducationPage resume={resume} dispatch={dispatch} />
      )}
      {page === 3 && (
        <SkillsPage resume={resume} dispatch={dispatch} />
      )}
      {page === 4 && (
        <ProjectsPage resume={resume} dispatch={dispatch} />
      )}
      {page === 5 && (
        <SocialMediaPage resume={resume} dispatch={dispatch} />
      )}

      {page < 5 && <button id="next" onClick={handleNext}>Next</button>}
      {page > 1 && <button id="back" onClick={handleBack}>Back</button>}

      {page === 5 && (
        <button id="save_continue" onClick={() => alert('Resume Saved')}>Save and Continue</button>
      )}
    </div>
  );
};

export default App;
