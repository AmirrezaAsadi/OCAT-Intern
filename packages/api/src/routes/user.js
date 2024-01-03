const { Router } = require(`express`);
const { ResponseHandler } = require(`../utils`);
const { UserService } = require(`../microservices`);

const userRouter = Router();

// Place your routes in here
userRouter.post(`/submit`, async (req, res, next) => {
  try {

    const { assessment } = req.body;

    // eslint-disable-next-line no-console
    console.log(`response in the backend`, loginInfo);

    // Call the submit method from AssessmentService with the assessment data
    await UserService.submit(assessment);
    // Send a response indicating successful submission
    ResponseHandler(res, `Submitted assessment`, {});
  } catch (err) {

    next(err);
  }
});

module.exports = { userRouter };
