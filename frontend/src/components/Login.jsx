import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { addUser } from "../redux/userSlice";

const Login = () => {

  const name = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = async () =>{
    console.log("Login");
    const data = await fetch('http://localhost:8000/user/login',{
      method: "POST",
      body : JSON.stringify({
        userName : name.current.value,
        password : password.current.value 
      }),
      headers : {
        "Content-type":"application/json"
      }
    });

    const response = await data.json();
    console.log("USER",response.user._id);
    dispatch(addUser(response.user));
    navigate('/'+ response?.user?._id) 
  }

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/4 md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
      >
          <input
            ref={name}
            type='text'
            placeholder='Username'
            className='p-4 my-4 w-full bg-gray-700 rounded-md'
          />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700 rounded-md'
        />
        <button
          className='p-4 my-6 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}
        >
          Login
        </button>
      </form>
    </div>

  )
}

export default Login