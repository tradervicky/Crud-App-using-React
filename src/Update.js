import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams , useNavigate} from "react-router-dom";

function Update() {
    const {id}= useParams();
    const [data, setData] =useState([])
    const navigat = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/components/'+id)
        .then(res=> setData(res.data))
        .catch(err=>console.Consolelog(err))
    },[])
    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.put('http://localhost:3000/components/'+id, data)
        .then(res =>{
            navigat('/');

        }).catch(err=>console.log(err))
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-light p-5">
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">ID:</label>
                <input type="text" disabled  name='name' class="form-control" value={data.id}/>
            </div>
            <div>
                <label htmlFor="name">Name :</label>
                <input type="text"  name='name' class="form-control" value={data.name} onChange={e=>setData({...data, name: e.target.value})}/>
            </div>
            <div>
            <label for="email" class="form-label">Email :</label>
            <input type="email"  name='email' class="form-control" value={data.email} onChange={e=>setData({...data, email: e.target.value})}/>
            </div><br />
            <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update