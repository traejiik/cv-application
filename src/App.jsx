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

  // Personal Info
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
          />
        </div>
        <div className="previewCtn"></div>
      </div>
    </>
  );
}

export default App;
