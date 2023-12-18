import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    element: <DashboardBulletin />,
    path: `/`,
  },
  {
    element: <NewAssessment />,
    path: `/assessment/new`,
  },

]);

const App = () => <SiteWrapper>
  <h1>Amir Test </h1>
  <RouterProvider router={router} />

</SiteWrapper>;

export default App;
