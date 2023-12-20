// Import necessary modules and middleware
const { Router } = require(`express`);
const { AssessmentService } = require(`../microservices`);
const { ResponseHandler } = require(`../utils`);

// Initialize the router
const assessmentRouter = Router();

// POST endpoint to submit an assessment
assessmentRouter.post(`/submit`, async (req, res, next) => {
  try {

    const { assessment } = req.body;

    // eslint-disable-next-line no-console
    console.log(`response in the backend`, assessment);

    // Call the submit method from AssessmentService with the assessment data
    const submissionResult = await AssessmentService.submit(assessment);

    // Send a response indicating successful submission
    ResponseHandler(res, `Submitted assessment`, {});
  } catch (err) {

    next(err);
  }
});

// GET endpoint to fetch assessments
assessmentRouter.get(`/`, async (req, res, next) => {
  try {
    // Log a message to confirm the endpoint is reached
    // eslint-disable-next-line no-console
    console.log(`Fetching assessments`);

    // Call the getList method from AssessmentService to retrieve assessments
    const assessments = await AssessmentService.getList();

    // Send a response with the fetched assessments
    ResponseHandler(res, `Fetched assessments`, { assessments });
  } catch (err) {

    next(err);
  }
});

//
module.exports = { assessmentRouter };
