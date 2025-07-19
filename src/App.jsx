import { useState } from 'react';
import './App.css';
import Personal from './app/personalInfo';

function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      isEditing: true,
      data: {
        name: '',
        title: '',
        email: '',
        phone: '',
        location: '',
      },
    },
  });

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

  const handlePersonalToggle = (view) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        isEditing: !view ? true : false,
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

  return (
    <>
      <div>
        <Personal
          isEditing={cvData.personalInfo.isEditing}
          data={cvData.personalInfo.data}
          onChange={handlePersonalChange}
          onToggleEdit={handlePersonalToggle}
          onClear={handlePersonalClear}
        />
      </div>
    </>
  );
}

export default App;
