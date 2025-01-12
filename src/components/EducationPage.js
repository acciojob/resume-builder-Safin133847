import React from 'react';
import { useDispatch } from 'react-redux';
import { addEducation, deleteEducation } from '../actions';  

const EducationPage = ({ resume }) => {
  const dispatch = useDispatch();

  const handleAddEducation = () => {
    const newEducation = { courseName: '', completionYear: '', college: '', percentage: '' };
    dispatch(addEducation(newEducation));
  };

  return (
    <div>
      <h2>Education</h2>
      {resume.education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            name="courseName"
            value={edu.courseName}
            onChange={(e) => {}}
            placeholder="Course Name"
          />
          <input
            type="text"
            name="completionYear"
            value={edu.completionYear}
            onChange={(e) => {}}
            placeholder="Completion Year"
          />
          <input
            type="text"
            name="college"
            value={edu.college}
            onChange={(e) => {}}
            placeholder="College"
          />
          <input
            type="text"
            name="percentage"
            value={edu.percentage}
            onChange={(e) => {}}
            placeholder="Percentage"
          />
          <button onClick={() => dispatch(deleteEducation(index))}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
};

export default EducationPage;
