import { Task } from '../../model/task';

export class AddTask {
    static readonly type = '[Tasks] Add Task';

    constructor(public payload) {}
}

export class AddTodo {
    static readonly type = '[Tasks] Add Todo';

    constructor(public payload) {}
}

export class FetchTasks {
    static readonly type = '[Task] Fetch tasks';

    constructor(public payload: {taskTitle: string}) {}
}

export class ClearState {
    static readonly type = '[Tasks] Clear state';
}