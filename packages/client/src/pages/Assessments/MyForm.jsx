// create a form that utilizes the "onSubmit" function to send data

import React, { useState } from 'react';

function MyForm() {
  // Step 2: Set up state for the form inputs
  const [ formData, setFormData ] = useState({
    email: ``,
    username: ``,

  });

  // Step 3: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action
    console.log(`Form data:`, formData);
    // Add your form submission logic here
  };

  // Helper function to update state based on form input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 4: Create the form
  return (
    <form onSubmit={handleSubmit}>
      <h1>Cat Behavorial Instrument</h1>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
