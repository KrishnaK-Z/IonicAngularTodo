import { Todo } from './todo';

export interface Task {
    id: string;
    title: string;
    hastags: string;
    status: string;
    lists: Todo[]
}