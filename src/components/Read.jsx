import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from '../Reducer/Slice/UserDetails';
import SingleUser from './SingleUser';
import { NavLink } from 'react-router-dom';

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  const [id, setId] = useState(null);
  const [showpopup, setpopup] = useState(false);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading)
    return (
      <h2 className='flex justify-center items-center text-white text-3xl font-serif font-bold'>Loading.....</h2>
    );

  return (
    <>
      <div className='grid gap-4 md:grid-cols-4 sm:grid-cols-2 mt-7 mx-auto max-w-6xl px-4'>
        {showpopup && setId && <SingleUser id={id} setpopup={setpopup} />}

        {users.map((user) => (
          <div key={user.id} className='bg-white border-2 rounded-md text-slate-500 shadow-lg shadow-indigo-500/50 p-2'>
            <p className='text-black uppercase font-normal'>{user.name} </p>
            <p className='text-black uppercase font-normal'>{user.gender} </p>
            <p className='flex gap-3 mt-2'>
              <span
                className='cursor-pointer bg-green-500 px-2 py-0.5 rounded-md text-xs text-white transition-all hover:scale-90 duration-300 flex justify-center items-center'
                onClick={() => [setId(user.id), setpopup(true)]}
              >
                View
              </span>
              <span
                onClick={() => dispatch(deleteUser(user.id))}
                className='cursor-pointer bg-green-500 px-2 py-0.5 rounded-md text-xs text-white transition-all hover:scale-90 duration-300 flex justify-center items-center'
              >
                Delete
              </span>
              <NavLink
                className='cursor-pointer bg-green-500 px-2 py-0.5 rounded-md text-xs text-white transition-all hover:scale-90 duration-300 flex justify-center items-center'
                to={`/edit/${user.id}`}
              >
                Edit
              </NavLink>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Read;
