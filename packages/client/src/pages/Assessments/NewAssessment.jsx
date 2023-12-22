import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    // Calculate scores based on responses
    data.score = calculateScore(data);
    data.riskLevel = calculateRiskLevel(data.score);
    const catName = `${data.firstName} ${data.lastName}`;
    data.catName = catName;
    await AssessmentService.submit({ assessment: data });
    // Additional logic after submitting the form
  };

  const instrumentTypes = [
    { id: 1, name: `Reference` },
    { id: 2, name: `Course` },
    { id: 3, name: `Service` },
    // Add more types as needed
  ];
  const calculateScore = (formData) => {
    let score = 0;
    score += formData.previousCatJudicialSystem ? 1 : 0;
    score += formData.physicalAltercationsWithCats === `3+` ? 1 : 0;
    score += formData.physicalAltercationsWithOwner === `10+` ? 1 : 0;
    score += formData.playsWellWithDogs ? 0 : 1;
    score += formData.hissesAtStrangers ? 1 : 0;
    return score;
  };

  // add function to calculate risk level based on score, if it is between 0-2 then low, 3-4 then medium, 5-6 then high
  const calculateRiskLevel = (score) => {
    let riskLevel = `low`;

    if (score >= 0 && score <= 2) {
      riskLevel = `low`;
    } else if (score >= 3 && score <= 4) {
      riskLevel = `medium`;
    } else if (score >= 5 && score <= 6) {
      score = `high`;
    }
    return riskLevel;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Existing fields */}
      <h4> First Name</h4>
      <input {...register(`firstName`)} placeholder="John" />
      <h4> Last Name</h4>
      <input {...register(`lastName`, { required: true })} placeholder="Doe" />
      {errors.lastName && <p>Last name is required.</p>}
      <h4>Cat Behavioral Instrument</h4>
      <select {...register(`instrumentType`)}>
        {instrumentTypes.map((type) =>
          <option key={type.id} value={type.id}>{type.name}</option>)}
      </select>
      <h4>Date of Birth</h4>
      <input type="date" {...register(`catDateOfBirth`)} placeholder="Cat Date of Birth" />

      <h4>Questions & Responses</h4>
      <label htmlFor="previousCatJudicialSystem">Previous contact with the Cat Judicial System</label>
      <input type="radio" {...register(`previousCatJudicialSystem`)} value="yes" /> Yes
      <input type="radio" {...register(`previousCatJudicialSystem`)} value="no" defaultChecked /> No
      <br />

      <label htmlFor="physicalAltercationsWithCats">Physical altercations with other cats</label>
      <input type="radio" {...register(`physicalAltercationsWithCats`)} value="0-3" defaultChecked /> 0-3 altercations
      <input type="radio" {...register(`physicalAltercationsWithCats`)} value="3+" /> 3+ altercations
      <br />
      <label htmlFor="physicalAltercationsWithOwner">
        Physical altercations with owner (scratching, biting, etc...)
      </label>
      <br />
      <input
        type="radio"
        {...register(`physicalAltercationsWithOwner`)}
        value="0-10"
        defaultChecked
      /> 0-10 altercations
      <input type="radio" {...register(`physicalAltercationsWithOwner`)} value="10+" /> 10+ altercations
      <br />
      <label htmlFor="playsWellWithDogs">Plays well with dogs</label>
      <input type="radio" {...register(`playsWellWithDogs`)} value="yes" defaultChecked /> Yes
      <input type="radio" {...register(`playsWellWithDogs`)} value="no" /> No
      <br />
      <label htmlFor="hissesAtStrangers">Hisses at strangers</label>
      <input type="radio" {...register(`hissesAtStrangers`)} value="yes" id="hissesAtStrangers" /> Yes
      <input type="radio" {...register(`hissesAtStrangers`)} value="no" defaultChecked /> No

      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};
