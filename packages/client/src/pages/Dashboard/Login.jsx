import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { UserService } from '../../services/UserService';

export const Login = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = async (data) => {
    // Logic to handle user login
    data.username = `username`;
    data.password = `password`;

    await UserService.submit({ user: data });
    // Additional logic after successful login
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h4>Username</h4>
      <input
        {...register(`username`, { required: true })}
        placeholder="Username"
      />
      {errors.username && <p>Username is required.</p>}

      <h4>Password</h4>
      <input
        type="password"
        {...register(`password`, { required: true })}
        placeholder="Password"
      />
      {errors.password && <p>Password is required.</p>}
      <br />
      <br />

      <Button variant="primary" type="submit">Create New User</Button>
    </Form>
  );
};
