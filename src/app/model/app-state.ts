// {
//     tasks:[{
//         id: 0,
//         title: 'Use Redux',
//         hastags: "",
//         status: STATUS_OPEN,
//         lists: [{
//             id: 0,
//             title: 'First Things First!!!',
//             status: false
//         }]
//     }]
// }

import {Tasks} from './tasks';

export interface AppState {
    tasks: Tasks
  }