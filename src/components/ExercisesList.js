import React, { useEffect, useState } from 'react';
import { getAllExercises, createExercise, updateExercise, deleteExercise } from '../utils/api';

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState('');
  const [editingExerciseId, setEditingExerciseId] = useState(null);

  useEffect(() => {
    getAllExercises().then((data) => setExercises(data));
  }, []);

  const handleCreateExercise = () => {
    createExercise({ name: newExercise }).then((data) => {
      setExercises([...exercises, data]);
      setNewExercise('');
    });
  };

  const handleEditExercise = (id, name) => {
    updateExercise(id, { name }).then(() => {
      const updatedExercises = exercises.map((exercise) =>
        exercise.id === id ? { ...exercise, name } : exercise
      );
      setExercises(updatedExercises);
      setEditingExerciseId(null);
    });
  };

  const handleDeleteExercise = (id) => {
    deleteExercise(id).then(() => {
      const updatedExercises = exercises.filter((exercise) => exercise.id !== id);
      setExercises(updatedExercises);
    });
  };

  return (
    <div className="bg-blue-100 p-4">
      <h2 className="text-xl font-semibold text-blue-800">Exercises</h2>
      <ul className="mt-2">
        {exercises.map((exercise) => (
          <li key={exercise.id} className="flex items-center justify-between mb-2">
            {editingExerciseId === exercise.id ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={exercise.name}
                  onChange={(e) => handleEditExercise(exercise.id, e.target.value)}
                  className="border rounded px-2 py-1 mr-2"
                />
                <button onClick={() => setEditingExerciseId(null)} className="text-blue-600 underline">
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span>{exercise.name}</span>
                <button onClick={() => setEditingExerciseId(exercise.id)} className="text-blue-600 underline ml-2">
                  Edit
                </button>
                <button onClick={() => handleDeleteExercise(exercise.id)} className="text-red-600 underline ml-2">
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <input
          type="text"
          placeholder="New Exercise"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button onClick={handleCreateExercise} className="bg-blue-600 text-white px-2 py-1 ml-2 rounded">
          Create
        </button>
      </div>
    </div>
  );
};

export default ExercisesList;
