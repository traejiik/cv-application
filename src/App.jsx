import { useState } from 'react';
import './App.css';
import Header from './app/header';
import Personal from './app/personalInfo';
import Education from './app/education';
import Experience from './app/experience';
import Projects from './app/projects';
import Skills from './app/skills';

function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      isEditing: false,
      data: {
        name: 'John Doe',
        title: 'Backend Developer',
        email: 'notreal@email.com',
        phone: '1234567890',
        location: 'Paris, France',
      },
    },
    education: {
      editingIndex: null,
      isVisible: false,
      data: [
        {
          id: 0,
          school: 'MIT',
          degree: 'BSc Computer Engineering',
          from: '2022-09-08',
          until: '2024-05-23',
        },
        {
          id: 1,
          school: 'Havard',
          degree: 'MSc Computer Engineering',
          from: '2024-09-18',
          until: '2025-05-23',
        },
      ],
    },
    experience: {
      editingIndex: null,
      isVisible: false,
      data: [
        {
          id: 0,
          company: 'Google',
          role: 'Junior Backend Developer',
          from: '2024-03-21',
          until: '2025-07-21',
        },
      ],
    },
    projects: {
      editingIndex: null,
      isVisible: false,
      data: [
        {
          id: 0,
          title: 'Weather App',
          description: 'Worked on the database for storing user accounts',
          from: '2022-04-22',
          until: '2022-09-12',
        },
      ],
    },
    skills: {
      editingIndex: null,
      isVisible: false,
      data: [
        { id: 0, skill: 'css' },
        { id: 1, skill: 'html' },
        { id: 2, skill: 'react' },
      ],
    },
  });
  const [nextIds, setNextIds] = useState({
    education: 2,
    experience: 1,
    projects: 1,
    skills: 3,
  });

  // General
  const handleToggleView = (section) => {
    setCvData((prev) => {
      const newCvData = { ...prev };

      for (const key in newCvData) {
        if ('isVisible' in newCvData[key]) {
          newCvData[key] = {
            ...newCvData[key],
            isVisible: false,
          };
        }
      }

      newCvData[section] = {
        ...newCvData[section],
        isVisible: !prev[section].isVisible,
      };

      return newCvData;
    });
  };
  const handleChange = (section, index, field, value) => {
    setCvData((prev) => {
      const updatedSection = [...prev[section].data];
      updatedSection[index] = {
        ...updatedSection[index],
        [field]: value,
      };

      return {
        ...prev,
        [section]: {
          ...prev[section],
          data: updatedSection,
        },
      };
    });
  };
  const handleEdit = (section, index) => {
    setCvData((prev) => {
      const value = prev[section].editingIndex;
      return {
        ...prev,
        [section]: {
          ...prev[section],
          editingIndex: index == value ? null : index,
        },
      };
    });
  };
  const handleDelete = (section, index) => {
    setCvData((prev) => {
      const prevList = [...prev[section].data];
      const newList = prevList.filter((_, i) => i !== index);

      return {
        ...prev,
        [section]: {
          ...prev[section],
          data: newList,
        },
      };
    });
  };

  // Personal
  const handlePersonalChange = (field, value) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        data: {
          ...prev.personalInfo.data,
          [field]: value,
        },
      },
    }));
  };
  const handlePersonalToggle = () => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        isEditing: !prev.personalInfo.isEditing,
      },
    }));
  };
  const handlePersonalClear = () => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        data: {
          name: '',
          title: '',
          email: '',
          phone: '',
          location: '',
        },
      },
    }));
  };

  // Education
  const handleEduAdd = () => {
    setCvData((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        editingIndex: nextIds.education,
        data: [
          ...prev.education.data,
          {
            id: nextIds.education,
            school: '',
            degree: '',
            from: '',
            until: '',
          },
        ],
      },
    }));

    setNextIds((prevId) => ({
      ...prevId,
      education: prevId.education + 1,
    }));
  };
  // Experience
  const handleExpAdd = () => {
    setCvData((prev) => ({
      ...prev,
      education: {
        ...prev.experience,
        editingIndex: nextIds.experience,
        data: [
          ...prev.experience.data,
          {
            id: nextIds.experience,
            school: '',
            degree: '',
            from: '',
            until: '',
          },
        ],
      },
    }));

    setNextIds((prevId) => ({
      ...prevId,
      experience: prevId.experience + 1,
    }));
  };
  // Projects
  const handleProAdd = () => {
    setCvData((prev) => ({
      ...prev,
      projects: {
        ...prev.projects,
        editingIndex: nextIds.projects,
        data: [
          ...prev.projects.data,
          {
            id: nextIds.projects,
            title: '',
            description: '',
            from: '',
            until: '',
          },
        ],
      },
    }));

    setNextIds((prevId) => ({
      ...prevId,
      projects: prevId.projects + 1,
    }));
  };
  // Skills
  const handleSkillAdd = () => {
    setCvData((prev) => ({
      ...prev,
      projects: {
        ...prev.skills,
        editingIndex: nextIds.skills,
        data: [
          ...prev.skills.data,
          {
            id: nextIds.skills,
            skill: '',
          },
        ],
      },
    }));

    setNextIds((prevId) => ({
      ...prevId,
      skills: prevId.skills + 1,
    }));
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="sectionEditors">
          <Personal
            isEditing={cvData.personalInfo.isEditing}
            data={cvData.personalInfo.data}
            onChange={handlePersonalChange}
            onToggleEdit={handlePersonalToggle}
            onClear={handlePersonalClear}
          />
          <Education
            editingIndex={cvData.education.editingIndex}
            isVisible={cvData.education.isVisible}
            data={cvData.education.data}
            onChange={handleChange}
            onToggleEdit={handleEdit}
            onToggleView={handleToggleView}
            onAdd={handleEduAdd}
            onDelete={handleDelete}
          />
          <Experience
            editingIndex={cvData.experience.editingIndex}
            isVisible={cvData.experience.isVisible}
            data={cvData.experience.data}
            onChange={handleChange}
            onToggleEdit={handleEdit}
            onToggleView={handleToggleView}
            onAdd={handleExpAdd}
            onDelete={handleDelete}
          />
          <Projects
            editingIndex={cvData.projects.editingIndex}
            isVisible={cvData.projects.isVisible}
            data={cvData.projects.data}
            onChange={handleChange}
            onToggleEdit={handleEdit}
            onToggleView={handleToggleView}
            onAdd={handleProAdd}
            onDelete={handleDelete}
          />
          <Skills
            editingIndex={cvData.skills.editingIndex}
            isVisible={cvData.skills.isVisible}
            data={cvData.skills.data}
            onChange={handleChange}
            onToggleEdit={handleEdit}
            onToggleView={handleToggleView}
            onAdd={handleSkillAdd}
            onDelete={handleDelete}
          />
        </div>
        <div className="previewCtn"></div>
      </div>
    </>
  );
}

export default App;
