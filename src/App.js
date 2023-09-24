
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

// import Read from './Read';
function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const Navigate =useNavigate();
      useEffect(()=>{
        axios.get('http://localhost:3000/components')
        .then(res=> {
          setColumns(Object.keys(res.data[0])) //it will fetch the keys means headers
          setRecords(res.data)
        })
      })
     const handleSubmit = (id) =>{
      const conf = window.confirm("Do you want to delete ?")
      if (conf){
        axios.delete('http://localhost:3000/components/'+id)
        .then(res=>{
          Navigate('/')
        })
      }
     }
  
  return (
  <div className="container text-center">
    <div className='text-end my-5 ' ><Link  to='/create' className='btn btn-primary'>Add +</Link></div>
    <table className="table mt-1">
      <thead >
      <tr >

        {
          
          columns.map((c,i) =>(
            <th key={i} className='bg-primary text-white'>{c}</th>
          ))}
          <th className='bg-primary text-white'>Action</th>
        </tr>
      </thead>
      <tbody >
        {
          records.map((d,i)=>(
            <tr key={i} className="table-secondary">
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link to={`/update/${d.id}`} className="btn btn-success">Update</Link>
              <button className="btn ms-2 btn-danger" onClick={e=>handleSubmit(d.id)}> Delete</button>
              </td>              
            </tr>

          ))
        }
      </tbody>

    </table>
    </div>
  );
      }

export default App;
