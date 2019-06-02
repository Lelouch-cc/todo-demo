export default {
  TODO_INIT({ commit }: { commit: any }) {
    commit('TODO_INIT');
  },
  ADD_TODO({ commit }: { commit: any }, data: string) {
    commit('ADD_TODO', {
      id: new Date().getTime(),
      data,
      isDone: false,
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
  COMPLETE_ALL_TODO({ commit }: { commit: any }) {
    commit('COMPLETE_ALL_TODO');
  },
  DELETE_DONE_TODO({ commit }: { commit: any }) {
    commit('DELETE_DONE_TODO');
  },
};
