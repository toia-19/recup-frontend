import { defineStore } from "pinia";

import type { Task } from "@/models/TaskModel";

import type { TaskState } from "@/models/TaskStateModel";

export const useTaskStore = defineStore({
    id: "Task",
    state: () : TaskState => ({
        id: 0,
        tarea: "",
        status: false,
        loading: false,
        data: []
    }),
    actions: {
        addTask(task: Task) {
            this.data.push(task);
        },
        removeTask(task: Task) {
            // this.data.filter();
        },
        updateTaskStatus(task: Task) {
            // this.data.findIndex();
        }
    }
})