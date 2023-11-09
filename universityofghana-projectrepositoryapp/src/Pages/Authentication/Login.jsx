import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';

function Login() {
const navigate = useNavigate();
const [userRole, setUserRole] = useState('');
const [password, setUserPassword] = useState('');
const LoginMessage = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const handleLogin = (e) => {

  e.preventDefault();

  axios.post ('https://localhost:5001/api/SignUp/verify', {
    user_Role: userRole,
    user_Password: password,
  })
  .then((response) => {
    //Save the token in local storage
    localStorage.setItem('token', response.data.token);

    //Decode the token
    const decodedToken = jwtDecode(localStorage.getItem("token"));
    console.log(decodedToken); //Access the decoded token data
    
    //Show sucess message
    LoginMessage.fire({
      icon: 'success',
      title: 'Signed in successfully'
    });

    /* navigate('/dashboard'); */ //Redirect to the dashboard

    const navigateToUser = () => {
      const decodedToken = jwtDecode(response.data.token);
          const userRole =  decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  
          if (userRole === 'student') {
              return navigate('/template')
          } 
          else if (userRole === 'researcher'){
            navigate('/Projectrepository')
          }
           else if (userRole ==='supervisor') {
            navigate('/dashboard')
          } else if (userRole === 'admin') {
            navigate('/admin')
          }
    }
  
    navigateToUser();

  })

  .catch((error) => {
    //Handle Error
    console.error('Login Error', error);
    
    //Show error message
    LoginMessage.fire({
      icon: 'error',
      title: 'An error occured.',
      text: 'Pleace check console and try again.'
    });

  }) 
}


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-40 w-auto"
        src="/UGRepositoryLogo.png"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
       Research and Project Work Repository For The University Of Ghana
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleLogin} method="POST">
        <div>
          <label /* htmlFor="email" */ className="block text-sm font-medium leading-6 text-gray-900">
            Student ID / Researcher ID / Supervisor ID
          </label>
          <div className="mt-2">
            <input
              id="role"
              name="role"
              type="text"
              required
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className=" w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition focus:border-LegonGold active:border-LegonGold disabled:cursor-default disabled:bg-white shadow-sm ring-1 ring-inset ring-LegonGold"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Pin
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
              className="w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition focus:border-LegonGold active:border-LegonGold disabled:cursor-default disabled:bg-white shadow-sm ring-1 ring-inset ring-LegonGold"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-LegonBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-LegonGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-LegonBlue"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
