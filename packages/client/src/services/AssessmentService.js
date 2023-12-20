import Axios from '../utils/http.config';

export class AssessmentService {
  static submit(assessment) {
    try {

      assessment.assessment.riskLevel = `low`;

      return Axios.post(`/assessment/submit`, assessment)
        .then(response => response.data);
    }
    catch (err) {

      if (err.response) {
        throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
      } else {
        throw new Error(err.message);
      }
    }
  }
}
