import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';

import { AddTask, AddTodo, FetchTasks, ClearState, EditTodo, ChangeTaskStatus, DeleteTask, DeleteTodo } from '../actions';


import {Task} from '../../model/task';

export class AppState {
    readonly tasks: Task[]
}

@State<AppState>({
    name: 'tasks',
    defaults: {
        tasks: []
    }
})

export class TaskState implements NgxsOnInit {

    @Selector()
    static getTasks(state: AppState) {
        return state.tasks;
    }

    ngxsOnInit(ctx: StateContext<AppState>) {
        console.log('State initialized.');
        ctx.dispatch(new ClearState());
        ctx.setState({
            tasks: [{
                id: 0,
                title: "Sample Task",
                hastags: '',
                status: "Open",
                todos: [{
                    id: 0,
                    title: "sample todo",
                    status: "false"
                }]
            }]
        });
    }

    @Action(ClearState)
    clearState({ setState }: StateContext<AppState>) {
        setState({
            tasks: []
    });
    }

    @Action(AddTask)
    addTask({ getState, setState }: StateContext<AppState>, { payload }) {
        const state = getState();
        setState({
            tasks: [...state.tasks, {
                id: state.tasks.reduce((maxId, task) => {
                    return Math.max(task.id, maxId)
                }, -1) + 1,
                title: payload.todoTitle,
                hastags: "",
                status: "Open",
                todos: []
            }]
        });
    }

    @Action(ChangeTaskStatus)
    changeTaskStatus({ getState, setState }: StateContext<AppState>, { payload }) {
        const state = getState();
        setState({
            tasks: state.tasks.map((task, index) => task.id === payload.taskId ? {
                ...task,
                status: payload.status
            } : task)
        });
    }

    @Action(DeleteTask)
    deleteTask({ getState, setState }: StateContext<AppState>, { payload }) {
        const state = getState();
        setState({
            tasks: state.tasks.filter((task, index) => task.id !== payload.taskId)
        });
    }

    @Action(AddTodo)
    addTodo({ getState, setState }: StateContext<AppState>, { payload }) {
        const state = getState();
        setState({
            tasks: state.tasks.map((task, index) => task.id === payload.taskId ? {
                ...task,
                todos: (function () {
                    var todos = task.todos;
                    return [
                        ...todos,
                        {
                            id: todos.reduce((maxId, todo) => {
                                return Math.max(todo.id, maxId)
                            }, -1) + 1,
                            title: payload.todoTitle,
                            status: "false"
                        }
                    ];
                })()
            } : task)
        });
    }

    @Action(DeleteTodo)
    deleteTodo ({ getState, setState }: StateContext<AppState>, { payload }) {
        const state = getState();
        setState({
            tasks: state.tasks.map((task, index) => task.id === payload.taskId  ? {
                ...task,
                todos: (function () {
                    var todos = task.todos;
                        return todos.filter(todo =>
                            todo.id !== payload.listId
                        );
                })()
            } : task)
        });
    }

    @Action(EditTodo)
    editTodo({ getState, setState }: StateContext<AppState>, { payload }) {
        const state = getState();
        setState({
            tasks: state.tasks.map((task, index) => task.id === payload.taskId ? {
                ...task,
                todos: (function () {
                    
                    var todos = task.todos;
                        return todos.map(todo =>
                            todo.id === payload.todoId ? {...todo, title: payload.title } :
                            todo
                        );
                })()
            } : task)
        });
    }

}
