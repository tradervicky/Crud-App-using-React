import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
    const [inputData, setInputData] =useState({name:'', email:''})
    const navigat = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.post('http://localhost:3000/components',inputData)
        .then(res =>{
            navigat('/');

        }).catch(err=>console.log(err))
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-light p-5">
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name :</label>
                <input type="text" name='name' class="form-control" onChange={e=>setInputData({...inputData, name: e.target.value})}/>
            </div>
            <div>
            <label for="email" class="form-label">Email :</label>
            <input type="email" name='email' class="form-control" onChange={e=>setInputData({...inputData, email: e.target.value})}/>
            </div><br />
            <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Add