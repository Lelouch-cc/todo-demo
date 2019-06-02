export default {
  ADD_TODO(state: any, data: any): void {
    state.todoList.push(data);
  },
};
