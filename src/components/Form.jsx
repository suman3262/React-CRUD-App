import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../Reducer/Slice/UserDetails';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const navigate=useNavigate();
     const dispatch=useDispatch();
    const [data,setData]=useState({
        name:'',
        email:'',
        age:null,
        gender:''
    });
 function formhandler(event)
 {

    setData((prev)=>(
        {
        ...prev,
        [event.target.name]:event.target.value
        }
    ));
 }

 function submitHandler(e)
 {
    e.preventDefault();

    dispatch(createUser(data));
  
    navigate("/read");

 }
  return (
    <div className='w-[60%] mx-auto mt-10 flex flex-col flex-wrap'>
        
        <h2 className='text-center text-2xl text-white font-medium'>Create A record to store into Databse</h2>
        <form onSubmit={submitHandler}
        
        className='mt-5 flex flex-col gap-y-2 p-4'
        >

            <label >
            <p className='text-slate-100 font-medium pb-2'>Name </p> 

            <input 
                className='w-[55%] h-8 bg-[#0f2027] text-white outline-1 pl-4 rounded-md'
                type="text" 
                name='name'
                value={data.name}
                onChange={formhandler}
                required
            /> 
            </label>

             <label>
             <p className='text-slate-100 font-medium pb-2'>Email</p> 

             <input 
               className='w-[55%] h-8 bg-[#0f2027] text-white outline-1 pl-4 rounded-md'
                type="email" 
                name='email'
                value={data.email}
                onChange={formhandler}
                required
             />
             
             </label>

             <label >
             <p className='text-slate-100 font-medium pb-2'> Age </p>
             
             <input 
              required
              className='w-[55%] h-8 bg-[#0f2027] text-white outline-1 pl-4 rounded-md'
              type='number'
              name='age'
              value={data.age}
              onChange={formhandler}
              />
             
             </label>

             <p className='text-slate-100 font-medium pb-2'>Gender</p>

             <label className='flex gap-x-5'>                
              <div className='flex gap-x-2'>
                 <span className='text-white font-medium'>Female</span>
                 <input type="radio"
                        name='gender'
                        value="female"
                        onChange={formhandler}
                        required
                  />
              </div>
             
             <div className='flex gap-x-2'>
                <span className='text-white font-medium'>Male</span>
                 <input type="radio"
                    name='gender'
                    value="male"
                    onChange={formhandler}
                    required
                  />
             </div>
             
             </label>

         
         <div className='w-[55%] mt-5 flex justify-center'>
            <button
            className='bg-indigo-700 text-white border-none w-24 h-10 rounded-md font-semibold 
            transition-all duration-200 hover:scale-95 shadow-lg'
            >Create</button>
         </div>

          


        </form>

       
    </div>
  )
}

export default Form