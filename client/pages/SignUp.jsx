import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './SignUp.css';

const schema = yup.object().shape({
  firstName: yup.string().required('first name is a required field'),
  lastName: yup.string().required('last name is a required field'),
  phoneNumber: yup.string().required('phone number is a required field'),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required()
});

export default function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = data => {
    fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resBody => {
        alert('You are now registered on BlueSea Charter, welcome!');
        window.location.hash = '#sign-in';
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="form-text-container">
            <h1>Welcome to BlueSea Charter</h1>
            <h5>
              Create an account or{' '}
              <a className="text-decoration-none" href="#sign-in">
                log in
              </a>
            </h5>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  {...register('firstName')}
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                ></input>
                <p className="error-msg">{errors.firstName?.message}</p>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  {...register('lastName')}
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                ></input>
                <p className="error-msg">{errors.lastName?.message}</p>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  {...register('phoneNumber')}
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Insert your phone number"
                ></input>
                <p className="error-msg">{errors.phoneNumber?.message}</p>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  {...register('email')}
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
                  {...register('password')}
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <p className="error-msg">{errors.password?.message}</p>
              </div>

              <button type="submit" className="btn btn-secondary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="col-6 form-img-container">
          <img className="h-100 form-img" src="/img/sign-up.jpg"></img>
        </div>
      </div>
    </div>
  );
}
