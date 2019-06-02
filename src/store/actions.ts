export default {
  ADD_TODO({ commit }: { commit: any }, data: string) {
    commit('ADD_TODO', {
      id: new Date().getTime(),
      data,
      isDown: false,
    });
  },
  EDIT_TODO({ commit }: { commit: any }, data: { text: string, index: number }) {
    commit('EDIT_TODO', data);
  },
  DELETE_TODO({ commit }: { commit: any }, data: number) {
    commit('DELETE_TODO', data);
  },
  CHANGE_TODO_STATUS({ commit }: { commit: any }, data: number) {
    commit('CHANGE_TODO_STATUS', data);
  },
};
