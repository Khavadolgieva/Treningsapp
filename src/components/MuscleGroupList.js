import React, { useEffect, useState } from 'react';
import { getAllMuscleGroups, createMuscleGroup, updateMuscleGroup, deleteMuscleGroup } from '../utils/api';

const MuscleGroupsList = () => {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [newMuscleGroup, setNewMuscleGroup] = useState('');
  const [editingMuscleGroupId, setEditingMuscleGroupId] = useState(null);

  useEffect(() => {
    getAllMuscleGroups().then((data) => setMuscleGroups(data));
  }, []);

  const handleCreateMuscleGroup = () => {
    createMuscleGroup({ name: newMuscleGroup }).then((data) => {
      setMuscleGroups([...muscleGroups, data]);
      setNewMuscleGroup('');
    });
  };

  const handleEditMuscleGroup = (id, name) => {
    updateMuscleGroup(id, { name }).then(() => {
      const updatedMuscleGroups = muscleGroups.map((muscleGroup) =>
        muscleGroup.id === id ? { ...muscleGroup, name } : muscleGroup
      );
      setMuscleGroups(updatedMuscleGroups);
      setEditingMuscleGroupId(null);
    });
  };

  const handleDeleteMuscleGroup = (id) => {
    deleteMuscleGroup(id).then(() => {
      const updatedMuscleGroups = muscleGroups.filter((muscleGroup) => muscleGroup.id !== id);
      setMuscleGroups(updatedMuscleGroups);
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Muscle Groups</h2>
      <ul className="list-inside list-disc">
        {muscleGroups.map((muscleGroup) => (
          <li key={muscleGroup.id}> 
            {editingMuscleGroupId === muscleGroup.id ? (
              <div>
                <input
                  type="text"
                  value={muscleGroup.name}
                  onChange={(e) => handleEditMuscleGroup(muscleGroup.id, e.target.value)}
                  className="border rounded px-2 py-1 mr-2"
                />
                <button
                  onClick={() => setEditingMuscleGroupId(null)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="mr-2">{muscleGroup.name}</span>
                <button
                  onClick={() => setEditingMuscleGroupId(muscleGroup.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteMuscleGroup(muscleGroup.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="New Muscle Group"
          value={newMuscleGroup}
          onChange={(e) => setNewMuscleGroup(e.target.value)}
          className="border rounded px-2 py-1 mr-2"
        />
        <button
          onClick={handleCreateMuscleGroup}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default MuscleGroupsList;
