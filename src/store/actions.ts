export default {
  ADD_TODO({ commit }: { commit: any }, data: string) {
    commit('ADD_TODO', {
      id: new Date().getTime(),
      data,
      isDown: false,
    });
  },
};
