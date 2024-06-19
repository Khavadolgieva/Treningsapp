import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import MuscleGroupsList from './components/MuscleGroupList';
import ExercisesList from './components/ExercisesList';
import ExerciseDetails from './components/ExerciseDetails';
import WorkoutForm from './components/WorkoutForm';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/muscle-groups" element={<MuscleGroupsList />} />
          <Route path="/exercises" element={<ExercisesList />} />
          <Route path="/exercise/:exerciseId" element={<ExerciseDetails />} />
          <Route path="/workout-form" element={<WorkoutForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

