
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getExerciseById } from '../utils/api';

const ExerciseDetails = () => {
  const { exerciseId } = useParams();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      try {
        const response = await getExerciseById(exerciseId);
        setExercise(response);
      } catch (error) {
        console.error('Feil ved henting av øvelsesdetaljer:', error);
      }
    };

    fetchExerciseDetails();
  }, [exerciseId]);

  return (
    <div className="p-4 bg-blue-100">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Øvelsesdetaljer</h2>
      {exercise ? (
        <div>
          <h3 className="text-lg font-semibold">{exercise.name}</h3>
          <p className="text-blue-600">Muskelgruppe: {exercise.muscleGroup}</p>
          <p className="text-blue-600">Vekt: {exercise.weight} kg</p>
          <p className="text-blue-600">Repetisjoner: {exercise.repetitions}</p>
          <p className="text-blue-600">Set: {exercise.sets}</p>
        </div>
      ) : (
        <p>Laster øvelsesdetaljer...</p>
      )}
    </div>
  );
};

export default ExerciseDetails;
