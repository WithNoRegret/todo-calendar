import { createContext, useState, ReactNode } from "react";
import { Task, TaskStorageValues } from "./interfaces";

interface TaskStorageContextProps {
  children: ReactNode;
}

export const TaskStorageContext = createContext<TaskStorageValues | null>(null);

export const TaskStorageProvider = ({ children }: TaskStorageContextProps) => {
  const [tasks, setTasks] = useState<{ task: Task; date: string }[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const addTask = (task: Task, date: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, { task, date }];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <TaskStorageContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskStorageContext.Provider>
  );
};
