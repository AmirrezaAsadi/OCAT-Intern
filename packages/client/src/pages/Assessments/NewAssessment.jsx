import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap'; // If you plan to use react-bootstrap components
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
    // Additional logic after submitting the form
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input {...register(`firstName`)} />
      <input {...register(`lastName`, { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register(`age`, { pattern: /\d+/s })} />
      {errors.age && <p>Please enter number for age.</p>}
      <br />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};
