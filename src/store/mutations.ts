export default {
  ADD_TODO(state: any, data: any): void {
    state.todoList.push(data);
  },
  EDIT_TODO(state: any, data: any): void {
    state.todoList[data.index].data = data.text;
  },
};
