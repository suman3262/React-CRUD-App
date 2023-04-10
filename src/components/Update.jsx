import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { showUser, userUpdate } from '../Reducer/Slice/UserDetails';


const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { users } = useSelector((state) => state.app);

    const [userData, setUserdata] = useState({});

    useEffect(() => {
        if (id) {
            const user = users.filter((usr) => usr.id === id)
            setUserdata(user[0]);

        }
    }, []);

    function formhandler(event) {

        setUserdata((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ));
    }

    function onHandel(e) {
        e.preventDefault();

        dispatch(userUpdate(userData));
        dispatch(showUser());

        navigate("/read");
    }

    return (
        <div className='w-[60%] max-md:w-[100%] mx-auto mt-10 flex flex-col  ' >

            <h2 className='text-center text-2xl text-white font-medium'>Update the records</h2>

            <form
                className='mt-5 flex flex-col gap-y-2 p-4'
                onSubmit={onHandel}>

                <label >
                    <p className='text-slate-100 font-medium pb-2'>Name </p>

                    <input
                        className='w-[55%] max-md:w-[90%] h-8 bg-[#0f2027] text-white outline-1 pl-4 rounded-md'
                        type="text"
                        name='name'
                        value={userData && userData.name}
                        onChange={formhandler}
                    />
                </label>

                <label>
                    <p className='text-slate-100 font-medium pb-2'>Email</p>

                    <input
                        className='w-[55%] max-md:w-[90%] h-8 bg-[#0f2027] text-white outline-1 pl-4 rounded-md'
                        type="email"
                        name='email'
                        value={userData && userData.email}
                        onChange={formhandler}
                    />

                </label>

                <label >
                    <p className='text-slate-100 font-medium pb-2'> Age </p>

                    <input
                        className='w-[55%] max-md:w-[90%] h-8 bg-[#0f2027] text-white outline-1 pl-4 rounded-md'
                        type='age'
                        name='age'
                        value={userData && userData.age}
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
                            checked={userData && userData.gender === 'female'}
                        />
                    </div>

                    <div className='flex gap-x-2'>
                        <span className='text-white font-medium'>Male</span>
                        <input type="radio"
                            name='gender'
                            value="male"
                            onChange={formhandler}
                            required
                            checked={userData && userData.gender === 'male'}
                        />
                    </div>

                </label>


                <div className='w-[55%] mt-5 flex justify-center'>
                    <button
                        className='bg-indigo-700 text-white border-none w-24 h-10 rounded-md font-semibold 
            transition-all duration-200 hover:scale-95 shadow-lg'
                    >
                        Update
                    </button>
                </div>


            </form>

        </div>
    )
}

export default Update;