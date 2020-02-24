import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AddTask, FetchTasks, ClearState } from '../actions';


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
                lists: []
            }]
        });
    }

}
