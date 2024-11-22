import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-500';
      case 'In Progress':
        return 'bg-blue-500';
      case 'Completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-4 border-b flex items-center justify-between hover:bg-gray-50">
      <div className="flex-grow">
        <div className="flex items-center mb-2">
          <span className={`mr-2 px-2 py-1 rounded text-white text-xs ${getStatusColor(task.status)}`}>
            {task.status}
          </span>
          <h3 className="font-bold">{task.title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{task.description}</p>
        {task.dueDate && (
          <p className="text-gray-500 text-xs mt-1">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        )}
      </div>
      <div className="flex space-x-2">
        <button onClick={() => onEdit(task)} className="text-blue-500 hover:bg-blue-100 p-2 rounded">
          Edit
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-500 hover:bg-red-100 p-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
