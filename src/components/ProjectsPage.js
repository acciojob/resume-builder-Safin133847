import React from 'react';
import { useDispatch } from 'react-redux';
import { addProject, deleteProject } from '../actions';  

const ProjectsPage = ({ resume }) => {
  const dispatch = useDispatch();

  const handleAddProject = () => {
    const newProject = {
      projectName: '',
      techStack: '',
      description: ''
    };
    dispatch(addProject(newProject));  
  };

  return (
    <div>
      <h2>Projects</h2>
      {resume.projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="projectName"
            value={project.projectName}
            onChange={(e) => {}}
            placeholder="Project Name"
            style={{ marginBottom: '5px' }}
          />
          <input
            type="text"
            name="techStack"
            value={project.techStack}
            onChange={(e) => {}}
            placeholder="Tech Stack"
            style={{ marginBottom: '5px' }}
          />
          <textarea
            name="description"
            value={project.description}
            onChange={(e) => {}}
            placeholder="Description"
            rows="4"
            style={{ marginBottom: '5px' }}
          />
          <button onClick={() => dispatch(deleteProject(index))}>Delete</button>  {/* Dispatch delete action */}
        </div>
      ))}
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default ProjectsPage;
