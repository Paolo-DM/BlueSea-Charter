import React from 'react';
import AppContext from '../lib/app-context';
import { useForm } from 'react-hook-form';

export default function SignIn(props) {
  const { register, resetField, handleSubmit, formState: { errors } } = useForm();
  const { handleSignIn } = React.useContext(AppContext);

  const submitForm = data => {
    fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resBody => {
        if (resBody.error) {
          alert(resBody.error);
          resetField('email');
          resetField('password');
          window.location.hash = '#sign-in';
        } else {
          alert('You are now logged in, welcome to BlueSea Charter!');
          window.localStorage.setItem('bluesea-jwt', resBody.token);
          window.location.hash = '#';
        }
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  };

  return (
    <div className='container'>
      <h6 className='d-flex justify-content-end pt-3'>Don&apos; t have an account yet?&nbsp;<a href='#sign-up' className=" text-decoration-none">Sign Up</a></h6>
      <div className='pt-5 pb-4'>
        <h1 className='text-center'>BlueSea Charter</h1>
        <p className='h4 text-center'>Hello, who&apos;s this?</p>
      </div>
      <div className='row'>
        <div className='d-flex justify-content-center'>
          <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        {...register('email', { required: true })}
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <p className="error-msg">{errors.email?.message}</p>
                    </div>
                    <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  {...register('password', { required: true })}
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <p className="error-msg">{errors.password?.message}</p>
              </div>
              <button type="submit" className="btn btn-secondary" onClick={handleSignIn} >
                Sign In
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}
