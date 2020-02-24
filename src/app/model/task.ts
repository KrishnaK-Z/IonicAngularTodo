import { Todo } from './todo';

export interface Task {
    id: number;
    title: string;
    hastags: string;
    status: string;
    lists: Todo[]
}