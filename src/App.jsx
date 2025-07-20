import { useState } from 'react';
import './App.css';
import Header from './app/header';
import Personal from './app/personalInfo';
import Education from './app/education';

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
      editingIndex: 0,
      isVisible: true,
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
      isEditing: false,
      data: [
        {
          id: 0,
          company: 'Google',
          role: 'Junior Backend Developer',
          from: '2024',
          until: 'current',
        },
      ],
    },
    projects: {
      isEditing: false,
      data: [
        {
          id: 0,
          title: 'Weather App',
          description: 'Worked on the database for storing user accounts',
          from: '04/2022',
          until: '09/2022',
        },
      ],
    },
    skills: {
      isEditing: false,
      data: ['css', 'html', 'react'],
    },
  });
  const [nextIds, setNextIds] = useState({
    education: 2,
    experience: 0,
    projects: 0,
    skills: 0,
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
  const handleEduChange = (index, field, value) => {
    setCvData((prev) => {
      const updatedEducation = [...prev.education.data];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      };

      return {
        ...prev,
        education: {
          ...prev.education,
          data: updatedEducation,
        },
      };
    });
  };

  const handleEduEdit = (index) => {
    setCvData((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        editingIndex: index,
      },
    }));
  };

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

  const handleEduDelete = (index) => {
    setCvData((prev) => {
      const prevList = [...prev.education.data];
      const newList = prevList.filter((_, i) => i !== index);

      return {
        ...prev,
        education: {
          ...prev.education,
          data: newList,
        },
      };
    });
  };

  // Experience

  // Projects

  // Skills

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
            onChange={handleEduChange}
            onToggleEdit={handleEduEdit}
            onToggleView={handleToggleView}
            onAdd={handleEduAdd}
            onDelete={handleEduDelete}
          />
        </div>
        <div className="previewCtn"></div>
      </div>
    </>
  );
}

export default App;
