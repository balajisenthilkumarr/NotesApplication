import React, { useState } from 'react';

function Right({ onSave }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting task:', title, description);
    onSave({ title, description }); // Ensure onSave is invoked here
  };

  return (
    <div className="w-2/3 p-4">
      <h2 className="text-lg font-semibold text-gray-800">
        Add a New Task
      </h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        {/* Task Name Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Name"
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          autoFocus
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          rows="4"
        ></textarea>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Right;
