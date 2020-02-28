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
    static readonly type = '[Task] Fetch Tasks';

    constructor(public payload: {taskTitle: string}) {}
}

export class ClearState {
    static readonly type = '[Tasks] Clear State';
}

export class DeleteTask  {
    static readonly type = '[Tasks] Delete Task';

    constructor(public payload: {taskId: number}) {}
}

export class DeleteTodo {
    static readonly type = '[Tasks] Delete Todo';

    constructor(public payload: {taskId: number, todoId: number}) {}
}

export class ChangeTaskStatus {
    static readonly type = '[Tasks] Delete Todo';

    constructor(public payload: {taskId: number, status: string}) {}
}

export class EditTodo {
    static readonly type = '[Tasks] Edit Todo';

    constructor(public payload: {taskId: number, todoId: number, todoTitle: string}) {}
}