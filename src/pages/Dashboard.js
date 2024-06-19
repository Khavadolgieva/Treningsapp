import React, { useState, useEffect } from 'react';
import { getAllExercises } from '../utils/api';

const Dashboard = () => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hent øvelsesdata fra API
    getAllExercises()
      .then((data) => {
        setExercises(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="text-blue-500">Laster inn øvelsesdata...</p>;
  }

  if (error) {
    return <p className="text-red-500">Feil ved henting av øvelsesdata: {error.message}</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Din treningslogg</h2>
      {exercises.length === 0 ? (
        <p>Du har ingen treningsøkter ennå.</p>
      ) : (
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id} className="mb-4">
              <p className="text-lg font-semibold">Øvelse: {exercise.name}</p>
              <p>Muskelgruppe: {exercise.muscleGroup}</p>
              <p>Vekt: {exercise.weight} kg</p>
              <p>Repetisjoner: {exercise.repetitions}</p>
              <p>Serier: {exercise.sets}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;

