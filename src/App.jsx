import React from "react";
import { TaskProvider } from "./components/TaskProvider";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Task Tracker</h1>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
