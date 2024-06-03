export interface Task {
    id: number;
    body: string;
    status: boolean;
}

export interface TaskStorageValues {
    tasks: {task: Task, date: string}[];
    addTask: (task: Task, date: string) => void;
    deleteTask: (id: number) => void;
}