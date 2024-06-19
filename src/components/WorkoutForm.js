import React, { useState } from 'react';

const WorkoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    exercise: '',
    weight: '',
    repetitions: '',
    sets: '',
    muscleGroup: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-medium mb-2">Opprett eller rediger treningsøkt:</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-800 font-medium mb-1">Dato:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exercise" className="block text-gray-800 font-medium mb-1">Øvelse:</label>
          <input
            type="text"
            id="exercise"
            name="exercise"
            value={formData.exercise}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block text-gray-800 font-medium mb-1">Vekt (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="repetitions" className="block text-gray-800 font-medium mb-1">Repetisjoner:</label>
          <input
            type="number"
            id="repetitions"
            name="repetitions"
            value={formData.repetitions}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sets" className="block text-gray-800 font-medium mb-1">Set:</label>
          <input
            type="number"
            id="sets"
            name="sets"
            value={formData.sets}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="muscleGroup" className="block text-gray-800 font-medium mb-1">Muskelgruppe:</label>
          <input
            type="text"
            id="muscleGroup"
            name="muscleGroup"
            value={formData.muscleGroup}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 w-full"
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Lagre
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutForm;
