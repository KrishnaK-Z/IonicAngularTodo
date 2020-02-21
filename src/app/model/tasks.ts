import { Task } from './task';

export interface Tasks {
    taskId: {[id: string]: Task}
}