import React from 'react'
import { useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Create() {
    const [component, setComponent] = useState([]);
    const [newcomponent, setNewcomponent] = useState([]);

  return (
    <>
    <h1>Components</h1>
      <h2>Create Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={newComponent.name} onChange={handleChange} required />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={newComponent.description} onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
    </>
  )
}

export default Create