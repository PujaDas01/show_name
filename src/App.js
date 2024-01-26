import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';

const App = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
    setFormData(null);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsFormVisible(false);
  };

  return (
    <div className="app">
      <div className='button-container'>
        <button onClick={handleButtonClick}>{isFormVisible ? 'Hide Form': 'Show Form'}</button>
      </div>
      {isFormVisible && <Form onSubmit={handleFormSubmit} />}
      {formData && (
        <div className="data-display">
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
