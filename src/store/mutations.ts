import { setDataToStore, getDataFromStore } from '@/util/localStorage';

export default {
  async TODO_INIT(state: any) {
    const data = await getDataFromStore();
    state.todoList = data;
  },
  ADD_TODO(state: any, data: any): void {
    state.todoList.push(data);
    setDataToStore(state.todoList);
  },
  EDIT_TODO(state: any, data: any): void {
    state.todoList[data.index].data = data.text;
    setDataToStore(state.todoList);
  },
  DELETE_TODO(state: any, data: any): void {
    state.todoList.splice(data, 1);
    setDataToStore(state.todoList);
  },
  CHANGE_TODO_STATUS(state: any, data: any): void {
    const status: boolean = state.todoList[data].isDone;
    state.todoList[data].isDone = !status;
    setDataToStore(state.todoList);
  },
  COMPLETE_ALL_TODO(state: any): void {
    state.todoList.map((item: any) => item.isDone = true);
    setDataToStore(state.todoList);
  },
  DELETE_DONE_TODO(state: any): void {
    const newList: any[] = [];
    state.todoList.map((item: any) => {
      if (!item.isDone) {
        newList.push(item);
      }
    });
    state.todoList = newList;
    setDataToStore(state.todoList);
  },
};
