import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './pages/Assessments/MyForm.jsx';

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
  <h1>This is Amir, Trying to learn </h1>
  <MyForm />
  <RouterProvider router={router} />

</SiteWrapper>;

export default App;
