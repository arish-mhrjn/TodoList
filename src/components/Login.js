import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const diffToast = () => {
    toast('login Success');
    toast.error('Success Notification !', {
      position: 'top-center',
    });
  };
  return (
    <div
      className=" container d-flex align-items-center justify-content-center flex-column"
      style={{ height: '100vh' }}>
      <h1>Login please😒😒😒</h1>
      <button className="btn btn-primary" onClick={diffToast}>
        Login
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
