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
};
