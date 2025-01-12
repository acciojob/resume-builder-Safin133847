export const updateProfile = (field, value) => ({
  type: 'UPDATE_PROFILE',
  payload: { field, value }
});

export const addEducation = (education) => ({
  type: 'ADD_EDUCATION',
  payload: education
});

export const deleteEducation = (index) => ({
  type: 'DELETE_EDUCATION',
  payload: index
});

export const addSkill = (skill) => ({
  type: 'ADD_SKILL',
  payload: skill
});

export const deleteSkill = (index) => ({
  type: 'DELETE_SKILL',
  payload: index
});

export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  payload: project
});

export const deleteProject = (index) => ({
  type: 'DELETE_PROJECT',
  payload: index
});

export const addSocial = (social) => ({
  type: 'ADD_SOCIAL',
  payload: social
});

export const deleteSocial = (index) => ({
  type: 'DELETE_SOCIAL',
  payload: index
});
