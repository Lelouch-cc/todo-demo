export default {
  ADD_TODO(state: any, data: any): void {
    state.todoList.push(data);
  },
  EDIT_TODO(state: any, data: any): void {
    state.todoList[data.index].data = data.text;
  },
  DELETE_TODO(state: any, data: any): void {
    state.todoList.splice(data, 1);
  },
  CHANGE_TODO_STATUS(state: any, data: any): void {
    const status: boolean = state.todoList[data].isDone;
    state.todoList[data].isDone = !status;
  },
  COMPLETE_ALL_TODO(state: any): void {
    state.todoList.map((item: any) => item.isDone = true);
  },
  DELETE_DONE_TODO(state: any): void {
    const newList: any[] = [];
    state.todoList.map((item: any) => {
      if (!item.isDone) {
        newList.push(item);
      }
    });
    state.todoList = newList;
  },
};
