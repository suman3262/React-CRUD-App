import React from 'react';
import { useSelector } from 'react-redux';

const SingleUser = ({id,setpopup}) => 
{
    const {users}=useSelector((state)=>state.app);
    const user=users.filter((user)=>user.id===id)
    console.log(user);
    return (
        <div className='fixed flex justify-center items-center bg-gray-800 w-screen h-screen '>
             <div className='bg-orange-600 text-white '>

                 <button className='bg-blue-500 ml-4 mt-2' onClick={()=>setpopup(false)}>Close</button>
                
                <div className='w-60 h-40 flex flex-col items-center'>
                    <p>{user[0].name}</p>
                    <p>{user[0].age}</p>
                    <p>{user[0].email}</p>
                    <p>{user[0].gender}</p>
                </div>

             </div>
        </div>
     )
}

export default SingleUser;