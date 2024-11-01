import type { Task } from "./TaskModel";

export interface TaskState extends Task {
    loading: boolean;
    data: Task[];
}