import React, { useState } from "react";
import { useTaskContext } from "./TaskProvider";

const TaskList = () => {
  const { tasks, updateTask, deleteTask } = useTaskContext();
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState({});

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setEditedTask(task);
  };

  const handleSave = () => {
    updateTask(editingTask, editedTask);
    setEditingTask(null);
  };

  const handleCancel = () => {
    setEditingTask(null);
    setEditedTask({});
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500";
      case "In Progress":
        return "bg-blue-500";
      case "Completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border-b flex items-start justify-between hover:bg-gray-50"
          >
            {editingTask === task.id ? (
              <div className="w-full">
                <input
                  type="text"
                  value={editedTask.title}
                  onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                  className="w-full p-2 border rounded mb-2"
                />
                <textarea
                  value={editedTask.description}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, description: e.target.value })
                  }
                  className="w-full p-2 border rounded mb-2"
                  rows="2"
                />
                <input
                  type="date"
                  value={editedTask.dueDate}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, dueDate: e.target.value })
                  }
                  className="w-full p-2 border rounded mb-2"
                />
                <select
                  value={editedTask.status}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, status: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
                <div className="mt-2 flex space-x-2">
                  <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded">
                    Save
                  </button>
                  <button onClick={handleCancel} className="bg-red-500 text-white p-2 rounded">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-grow">
                <div className="flex items-center">
                  <span
                    className={`mr-2 px-2 py-1 rounded text-white text-xs ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                  <h3 className="font-bold">{task.title}</h3>
                </div>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-gray-500 text-sm">Due: {task.dueDate}</p>
              </div>
            )}
            {editingTask !== task.id && (
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="text-blue-500 hover:bg-blue-100 p-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:bg-red-100 p-2 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
