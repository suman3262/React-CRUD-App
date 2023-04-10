import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='h-screen w-screen bg '>
  
          <div className='w-[70%]  flex flex-col items-center border-2 py-8 px-8 mx-auto mt-10'>

            <h1 className='text-white text-3xl font-bold tracking-wide'>CRUP Application</h1>

            <ul className='list-disc mt-5 text-slate-400'>
                <h2 className='text-xl my-4 font-semibold'>Four CRUD operations components explained</h2>

                <li>
                    <span className='text-xl text-white'>Create</span> : he create function allows users to create a new record in the database.

                </li>

                <li>
                    <span className='text-xl text-white'>Read</span> : The read function is similar to a search function. ...
                </li>

                <li>
                    <span className='text-xl text-white'>Update</span> : The update function is used to modify existing records that exist in the database. 
                </li>

                <li>
                    <span className='text-xl text-white'>Delete</span> : The delete function is used to delete existing records that exist in the database. 
                </li>
            </ul>
           
              <h2 className='mt-8 text-white text-2xl tracking-widest'>
                To Create a new record
              </h2>

              <NavLink to="/form"
  
             className="bg-orange-600 mt-6 inline-block rounded-full bg-warning px-10 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] ">
              Create
           </NavLink>
               
          </div>

    </div>
  )
}

export default Home;