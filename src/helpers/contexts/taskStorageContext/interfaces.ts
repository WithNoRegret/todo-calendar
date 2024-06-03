export interface Task {
    id: string;
    body: string;
    status: boolean;
}

export interface TaskStorageValues {
    tasks: {task: Task, date: string}[];
    addTask: (task: Task, date: string) => void;
    deleteTask: (id: string) => void;
    SetTaskStatus: (id: string, status: boolean) => void;
}