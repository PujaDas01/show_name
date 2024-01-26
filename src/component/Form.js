import React, { useState } from 'react';

const Form = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    if(!name || !age) {
        alert('Please enter all the data.');
    } else {
        const data = {
            name: name,
            age: age,
        } 
        props.onSubmit(data);
        alert('Data submitted successfully.');
    }
  };

  return (
    <div className='form'>
      <h2>Enter Form Data</h2>
      <label>
        Name:
        <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type='number' placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
