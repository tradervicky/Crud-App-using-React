
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Read() {
    const [components, setComponents] = useState([]);
    useEffect(() => {
        fetchComponents();
      }, []);
    
      const fetchComponents = () => {
        axios.get('http://localhost:3000/components')
          .then(response => {
            setComponents(response.data);
          })
          .catch(error => {
            console.error('Error fetching components:', error);
          });
      }
  return (
    <>
    <h2>Components List</h2>
      <ul>
        {components.map(component => (
          <li key={component.id}>{component.name}: {component.description}</li>
        ))}
      </ul>
    </>
  )
}

export default Read